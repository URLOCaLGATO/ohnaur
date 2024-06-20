var complete = [0,1,2,3,4,5,6,7,32,33,34,35,36,37,38,40,41,42,43,44,45,46,116,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,320,321,322,323,324,325,326,336,337,338,339,340,341,342,343,344,352,353,354,355,356,357,358,359,360,384,385,386,387,388,400,496,497,498,499,500,501,704,705,706,722,723,736,768,769,770,771,772,800,801,1024,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1056,1057,1058,1296,1297,1298,1299,1300,1305,1312,1313,1314,1328,1329,1330,1331,1344,1345,1346,1347,1348,1349,1350,1351,1352,1353,1376,1536,1792,2048,2049,2050,2051,2052,2053,2054,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2333,2334,2335,2336,2337,2338,2339,2340,3840,3841,3842,3843,3844,3845,3846,3847,3848,3849,3850,3851,3852,3853,3854,3856,3857,3872,3873,4096,4100,4101,4104,12288,12289,12290,12291,12292,12293,24576,28689,32768,32769,33536,33552,33553,33554,33555,33556,40960,40961,40962,40963,40976,40977,40978,40979,40980,40981,40982,40983,40984,40985,40986,40987,40988,40989,40990,40991,41232,41233,41234,41235,41236,41237,41238,41239,41240,41241,41242,41243,41264,41265,41266,41267,41472,41473,41474,41475,41476,41477,41478,41479,41488,41489,41490,41491,41492,41493,41494,41504,41553,41554,41555,41556,41557,41558,41559,41560,41561,41562,41563,41564,41565,41632,41633,41634,41635,41636,41637,41638,41639,41640,41641,41642,41643,41644,41645,65536,69632,77823,77824,77825,77826,77827,77828,77829,77830,77831,77832,77833,77834,77835,77836,77837,77838,77839,77840,77841,77842,77843,77844,77845,77846,77847,77848,77849,77850,77851,77852,77853,77854,77855,77856,77857,77858,77859,77860,77861,77862,77863,77864,77865,77866,77867,77868,77869,77870,77871,77872,77873,77874,77875,77876,77877,77878,77879,77880,77881,77882,77883,78080,78081,78082,78083,78084,78085,78086,78087,78088,78089,78090,78091,78092,78093,78094,78095,78096,78097,78098,78099,78100,78101,78102,78103,78112,78113,78114,78115,78116,78117,78118,78119,78120,78121,78122,78123,78124,78125,78126,78127,78128,78129,78130,78131,78132,78133,78134,78135,78136,78137,78138,78139,78140,78141,78142,78143,78144,78145,78146,78147,78148,78149,78150,78151,78152,78153,78154,78155,78156,78157,78158,78159,78160,78161,78162,78163,78164,78165,78166,78167,78168,78169,78170,78171,78176,78177,78178,78179,78180,78181,78182,78183,78184,78185,78186,78187,78188,78189,78190,78191,78192,78193,78194,78195,78196,78197,78198,78199,78200,78201,78202,78203,78204,78205,78206,78207,78208,78209,78210,78211,78212,78213,78214,78215,78216,78217,78218,78219,78220,78221,78222,78223,78224,78225,78226,78227,78228,78229,78230,78231,78232,78233,78234,78235,78240,78241,78242,78243,78244,78245,78246,78247,78248,78249,78250,78251,78256,78257,78258,78259,78260,78261,78262,78336,78337,78338,78339,78340,78341,78342,78343,78344,78345,78346,78347,78349,78350,78351,78352,78354,78355,78356,78358,78359,78361,78362,78366,78368,78372,78375,78382,131072];
var xml = `<!-- http://oid-info.com/oid.xsd -->
<oid-database>
<submitter>
  <first-name>R74n</first-name>
  <last-name>Collective</last-name>
  <email>contact@r74n.com</email>
</submitter>\n`;
function addEntry(root,decimal,displayName,url,details,asn1,asn1alt,dotMode) {
    if (dotMode && root.indexOf("(") !== -1) {
        root = root.split("(")[1].split(")")[0];
    }
    // var plainName = displayName;
    decimal = decimal.toString();
    if (url) {
        displayName = '<a href="' + url + '">' + displayName + '</a>';
    }
    xml += `<oid>
  ${
        dotMode ? `<dot-notation>1.3.6.1.4.1.61117.${root}.${decimal.replaceAll(" ",".")}</dot-notation>`
        : (
          `<asn1-notation>{iso(1) identified-organization(3) dod(6) internet(1) private(4) enterprise(1) 61117 ${root} ` +
          (asn1 ? `${asn1}(${decimal})` : decimal) + `}</asn1-notation>`
        )
    }\n`+
   (asn1 ? `  <identifier>${asn1}</identifier>\n` : "")+
   (asn1alt ? `  <synonymous-identifier>${asn1alt}</synonymous-identifier>\n` : "")+
`  <description>${displayName}</description>
  <information>${details}</information>
</oid>
`
}
function addTSV(tsv) {
    var lines = tsv.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.trim() === "") { continue }
        var cols = line.split("\t");
        var root = cols[0];
        var decimal = cols[1];
        var displayName = cols[2];
        var url = cols[3];
        var details = cols[4];
        var asn1 = cols[5];
        var asn1alt = cols[6];
        addEntry(root,decimal,displayName,url,details,asn1,asn1alt,true);
    }
}
function addPlanecodes() {
    for (var hex in multiplaneEntities) {
        if (hex.indexOf("(") !== -1) { continue }
        var value = multiplaneEntities[hex];
        var decimal = parseInt(hex, 16);
        if (complete.indexOf(decimal) !== -1) { continue }
        var planecode = "R"+decimal.toString(16).toUpperCase().padStart(5,"0");
        if (value.indexOf("//") !== -1) {
            var plainName = value.split("//")[0].replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("&","&amp;");
            var id = value.split("//").slice(1).join("//");
            var url = resolveID(id,true,2);
            url = resolveID(url,true,2);
            url = resolveID(url,true,2);
            url = resolveID(url,true,2);
            url = url.replace("urn:X-R74n:https://","https://");
            if (url.indexOf("Could not resolve") !== -1) {
                var displayName = plainName;
            }
            else {
                var displayName = '<a href="' + url + '">' + plainName + '</a>';
            }
        }
        else {
            var plainName = value.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("&","&amp;");;
            var displayName = plainName;
        }
        // find alphaCodes row with row[0] == decimal
        var alphaCodesF = alphaCodes.filter(function(row) { return row[0] == decimal; });
        if (alphaCodesF.length == 0) {
            var alphaM = "";
            var alpha2 = "";
        }
        else {
            var alphaM = alphaCodesF[0][2];
            var alpha2 = alphaCodesF[0][1];
            if (alpha2 === "  ") { alpha2 = "" }
        }
        addEntry(
            "multiplane(1)",
            decimal,
            displayName,
            null,
            `${plainName} is ${planecode} (#${decimal}) in the <a href="https://r74n.com/multiplane/?code=${planecode}">Multiplane</a>.`,
            alphaM,
            alpha2
        )
    }
}

// INSTRUCTIONS //
addPlanecodes();
// INSTRUCTIONS //

xml += `</oid-database>`;
console.log(xml);