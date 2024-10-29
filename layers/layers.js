ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([666148.446832, 9109162.608249, 699049.960829, 9125458.461697]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Kecamatan_1 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_1 = format_Batas_Kecamatan_1.readFeatures(json_Batas_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Batas_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_1.addFeatures(features_Batas_Kecamatan_1);
var lyr_Batas_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_1, 
                style: style_Batas_Kecamatan_1,
                popuplayertitle: "Batas_Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/Batas_Kecamatan_1.png" /> Batas_Kecamatan'
            });
var format_Lowok_Waru_2 = new ol.format.GeoJSON();
var features_Lowok_Waru_2 = format_Lowok_Waru_2.readFeatures(json_Lowok_Waru_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lowok_Waru_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowok_Waru_2.addFeatures(features_Lowok_Waru_2);
var lyr_Lowok_Waru_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowok_Waru_2, 
                style: style_Lowok_Waru_2,
                popuplayertitle: "Lowok_Waru",
                interactive: false,
                title: '<img src="styles/legend/Lowok_Waru_2.png" /> Lowok_Waru'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: "Jalan",
                interactive: false,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_PersebranRumhMkan_4 = new ol.format.GeoJSON();
var features_PersebranRumhMkan_4 = format_PersebranRumhMkan_4.readFeatures(json_PersebranRumhMkan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PersebranRumhMkan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebranRumhMkan_4.addFeatures(features_PersebranRumhMkan_4);
var lyr_PersebranRumhMkan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebranRumhMkan_4, 
                style: style_PersebranRumhMkan_4,
                popuplayertitle: "Persebran Rumh Mkan",
                interactive: true,
                title: '<img src="styles/legend/PersebranRumhMkan_4.png" /> Persebran Rumh Mkan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batas_Kecamatan_1.setVisible(true);lyr_Lowok_Waru_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_PersebranRumhMkan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batas_Kecamatan_1,lyr_Lowok_Waru_2,lyr_Jalan_3,lyr_PersebranRumhMkan_4];
lyr_Batas_Kecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_Lowok_Waru_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PersebranRumhMkan_4.set('fieldAliases', {'OID_': 'OID_', 'Nama_Warun': 'Nama_Warun', 'Easting': 'Easting', 'Northing': 'Northing', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Rating': 'Rating', });
lyr_Batas_Kecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', 'FID_1': 'TextEdit', 'LUASAR': 'TextEdit', 'JMLHPEN': 'TextEdit', 'KPDTNPEN': 'TextEdit', });
lyr_Lowok_Waru_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PersebranRumhMkan_4.set('fieldImages', {'OID_': 'TextEdit', 'Nama_Warun': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Rating': 'TextEdit', });
lyr_Batas_Kecamatan_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_Lowok_Waru_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PersebranRumhMkan_4.set('fieldLabels', {'OID_': 'no label', 'Nama_Warun': 'header label - always visible', 'Easting': 'no label', 'Northing': 'no label', 'Alamat': 'header label - always visible', 'Kelurahan': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Kota': 'header label - always visible', 'Rating': 'header label - always visible', });
lyr_PersebranRumhMkan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});