var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_zona_prioritas_pembngunan_1 = new ol.format.GeoJSON();
var features_zona_prioritas_pembngunan_1 = format_zona_prioritas_pembngunan_1.readFeatures(json_zona_prioritas_pembngunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_prioritas_pembngunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_prioritas_pembngunan_1.addFeatures(features_zona_prioritas_pembngunan_1);
var lyr_zona_prioritas_pembngunan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_prioritas_pembngunan_1, 
                style: style_zona_prioritas_pembngunan_1,
                popuplayertitle: 'zona_prioritas_pembngunan',
                interactive: true,
                title: '<img src="styles/legend/zona_prioritas_pembngunan_1.png" /> zona_prioritas_pembngunan'
            });
var format_Zona_puskesmas_500m_2 = new ol.format.GeoJSON();
var features_Zona_puskesmas_500m_2 = format_Zona_puskesmas_500m_2.readFeatures(json_Zona_puskesmas_500m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_puskesmas_500m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_puskesmas_500m_2.addFeatures(features_Zona_puskesmas_500m_2);
var lyr_Zona_puskesmas_500m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_puskesmas_500m_2, 
                style: style_Zona_puskesmas_500m_2,
                popuplayertitle: 'Zona_puskesmas_500m',
                interactive: true,
                title: '<img src="styles/legend/Zona_puskesmas_500m_2.png" /> Zona_puskesmas_500m'
            });
var format_zona_RS_2km_UTM_3 = new ol.format.GeoJSON();
var features_zona_RS_2km_UTM_3 = format_zona_RS_2km_UTM_3.readFeatures(json_zona_RS_2km_UTM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_RS_2km_UTM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_RS_2km_UTM_3.addFeatures(features_zona_RS_2km_UTM_3);
var lyr_zona_RS_2km_UTM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_RS_2km_UTM_3, 
                style: style_zona_RS_2km_UTM_3,
                popuplayertitle: 'zona_RS_2km_UTM',
                interactive: true,
                title: '<img src="styles/legend/zona_RS_2km_UTM_3.png" /> zona_RS_2km_UTM'
            });
var format_Merged_4 = new ol.format.GeoJSON();
var features_Merged_4 = format_Merged_4.readFeatures(json_Merged_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_4.addFeatures(features_Merged_4);
var lyr_Merged_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_4, 
                style: style_Merged_4,
                popuplayertitle: 'Merged',
                interactive: true,
                title: '<img src="styles/legend/Merged_4.png" /> Merged'
            });
var format_SUNGAI_LN_50K_5 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_5 = format_SUNGAI_LN_50K_5.readFeatures(json_SUNGAI_LN_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_5.addFeatures(features_SUNGAI_LN_50K_5);
var lyr_SUNGAI_LN_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_5, 
                style: style_SUNGAI_LN_50K_5,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_5.png" /> SUNGAI_LN_50K'
            });
var format_JALAN_LN_50K_6 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_6 = format_JALAN_LN_50K_6.readFeatures(json_JALAN_LN_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_6.addFeatures(features_JALAN_LN_50K_6);
var lyr_JALAN_LN_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_6, 
                style: style_JALAN_LN_50K_6,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_6.png" /> JALAN_LN_50K'
            });
var format_Pusat_Kecamatan_Tebingtinggi_7 = new ol.format.GeoJSON();
var features_Pusat_Kecamatan_Tebingtinggi_7 = format_Pusat_Kecamatan_Tebingtinggi_7.readFeatures(json_Pusat_Kecamatan_Tebingtinggi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pusat_Kecamatan_Tebingtinggi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pusat_Kecamatan_Tebingtinggi_7.addFeatures(features_Pusat_Kecamatan_Tebingtinggi_7);
var lyr_Pusat_Kecamatan_Tebingtinggi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pusat_Kecamatan_Tebingtinggi_7, 
                style: style_Pusat_Kecamatan_Tebingtinggi_7,
                popuplayertitle: 'Pusat_Kecamatan_Tebingtinggi',
                interactive: true,
                title: '<img src="styles/legend/Pusat_Kecamatan_Tebingtinggi_7.png" /> Pusat_Kecamatan_Tebingtinggi'
            });
var format_PUSKESMAS_PT_50K_8 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_8 = format_PUSKESMAS_PT_50K_8.readFeatures(json_PUSKESMAS_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_8.addFeatures(features_PUSKESMAS_PT_50K_8);
var lyr_PUSKESMAS_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_8, 
                style: style_PUSKESMAS_PT_50K_8,
                popuplayertitle: 'PUSKESMAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_8.png" /> PUSKESMAS_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_9 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_9 = format_RUMAHSAKIT_PT_50K_9.readFeatures(json_RUMAHSAKIT_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_9.addFeatures(features_RUMAHSAKIT_PT_50K_9);
var lyr_RUMAHSAKIT_PT_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_9, 
                style: style_RUMAHSAKIT_PT_50K_9,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_9.png" /> RUMAHSAKIT_PT_50K'
            });
var format_RS_UTM47N_10 = new ol.format.GeoJSON();
var features_RS_UTM47N_10 = format_RS_UTM47N_10.readFeatures(json_RS_UTM47N_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RS_UTM47N_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS_UTM47N_10.addFeatures(features_RS_UTM47N_10);
var lyr_RS_UTM47N_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RS_UTM47N_10, 
                style: style_RS_UTM47N_10,
                popuplayertitle: 'RS_UTM47N',
                interactive: true,
                title: '<img src="styles/legend/RS_UTM47N_10.png" /> RS_UTM47N'
            });
var format_puskesmas_UTM47N_11 = new ol.format.GeoJSON();
var features_puskesmas_UTM47N_11 = format_puskesmas_UTM47N_11.readFeatures(json_puskesmas_UTM47N_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmas_UTM47N_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puskesmas_UTM47N_11.addFeatures(features_puskesmas_UTM47N_11);
var lyr_puskesmas_UTM47N_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puskesmas_UTM47N_11, 
                style: style_puskesmas_UTM47N_11,
                popuplayertitle: 'puskesmas_UTM47N',
                interactive: true,
                title: '<img src="styles/legend/puskesmas_UTM47N_11.png" /> puskesmas_UTM47N'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_zona_prioritas_pembngunan_1.setVisible(true);lyr_Zona_puskesmas_500m_2.setVisible(true);lyr_zona_RS_2km_UTM_3.setVisible(true);lyr_Merged_4.setVisible(true);lyr_SUNGAI_LN_50K_5.setVisible(true);lyr_JALAN_LN_50K_6.setVisible(true);lyr_Pusat_Kecamatan_Tebingtinggi_7.setVisible(true);lyr_PUSKESMAS_PT_50K_8.setVisible(true);lyr_RUMAHSAKIT_PT_50K_9.setVisible(true);lyr_RS_UTM47N_10.setVisible(true);lyr_puskesmas_UTM47N_11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_zona_prioritas_pembngunan_1,lyr_Zona_puskesmas_500m_2,lyr_zona_RS_2km_UTM_3,lyr_Merged_4,lyr_SUNGAI_LN_50K_5,lyr_JALAN_LN_50K_6,lyr_Pusat_Kecamatan_Tebingtinggi_7,lyr_PUSKESMAS_PT_50K_8,lyr_RUMAHSAKIT_PT_50K_9,lyr_RS_UTM47N_10,lyr_puskesmas_UTM47N_11];
lyr_zona_prioritas_pembngunan_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Diare_TebingTinggi_Kasus_Diare_2022': 'Diare_TebingTinggi_Kasus_Diare_2022', });
lyr_Zona_puskesmas_500m_2.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_zona_RS_2km_UTM_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_Merged_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'layer': 'layer', 'path': 'path', });
lyr_SUNGAI_LN_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pusat_Kecamatan_Tebingtinggi_7.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Diare_TebingTinggi_Kasus_Diare_2022': 'Diare_TebingTinggi_Kasus_Diare_2022', });
lyr_PUSKESMAS_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_RUMAHSAKIT_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_RS_UTM47N_10.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_puskesmas_UTM47N_11.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', 'Alamat': 'Alamat', });
lyr_zona_prioritas_pembngunan_1.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Diare_TebingTinggi_Kasus_Diare_2022': 'Range', });
lyr_Zona_puskesmas_500m_2.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'Range', 'KMPPKM_': 'Range', 'JPLPKM_': 'Range', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'Range', 'PKMLMT_': 'TextEdit', });
lyr_zona_RS_2km_UTM_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', });
lyr_Merged_4.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'Range', 'KMPPKM_': 'Range', 'JPLPKM_': 'Range', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'Range', 'PKMLMT_': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SUNGAI_LN_50K_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_6.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Pusat_Kecamatan_Tebingtinggi_7.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Diare_TebingTinggi_Kasus_Diare_2022': 'Range', });
lyr_PUSKESMAS_PT_50K_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_RUMAHSAKIT_PT_50K_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_RS_UTM47N_10.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', });
lyr_puskesmas_UTM47N_11.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'Range', 'KMPPKM_': 'Range', 'JPLPKM_': 'Range', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'Range', 'PKMLMT_': 'TextEdit', 'Alamat': '', });
lyr_zona_prioritas_pembngunan_1.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Diare_TebingTinggi_Kasus_Diare_2022': 'no label', });
lyr_Zona_puskesmas_500m_2.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_zona_RS_2km_UTM_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_Merged_4.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SUNGAI_LN_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_50K_6.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pusat_Kecamatan_Tebingtinggi_7.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Diare_TebingTinggi_Kasus_Diare_2022': 'no label', });
lyr_PUSKESMAS_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_RUMAHSAKIT_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_RS_UTM47N_10.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_puskesmas_UTM47N_11.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', 'Alamat': 'no label', });
lyr_puskesmas_UTM47N_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});