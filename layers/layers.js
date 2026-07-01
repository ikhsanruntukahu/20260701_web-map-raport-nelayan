var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasWPPNRI_1 = new ol.format.GeoJSON();
var features_BatasWPPNRI_1 = format_BatasWPPNRI_1.readFeatures(json_BatasWPPNRI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWPPNRI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWPPNRI_1.addFeatures(features_BatasWPPNRI_1);
var lyr_BatasWPPNRI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWPPNRI_1, 
                style: style_BatasWPPNRI_1,
                popuplayertitle: 'Batas WPP NRI',
                interactive: true,
                title: '<img src="styles/legend/BatasWPPNRI_1.png" /> Batas WPP NRI'
            });
var format_Batas12MilLaut_2 = new ol.format.GeoJSON();
var features_Batas12MilLaut_2 = format_Batas12MilLaut_2.readFeatures(json_Batas12MilLaut_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas12MilLaut_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas12MilLaut_2.addFeatures(features_Batas12MilLaut_2);
var lyr_Batas12MilLaut_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas12MilLaut_2, 
                style: style_Batas12MilLaut_2,
                popuplayertitle: 'Batas 12 Mil Laut',
                interactive: true,
                title: '<img src="styles/legend/Batas12MilLaut_2.png" /> Batas 12 Mil Laut'
            });
var format_WPPNRI_3 = new ol.format.GeoJSON();
var features_WPPNRI_3 = format_WPPNRI_3.readFeatures(json_WPPNRI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WPPNRI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPPNRI_3.addFeatures(features_WPPNRI_3);
var lyr_WPPNRI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPPNRI_3, 
                style: style_WPPNRI_3,
                popuplayertitle: 'WPP NRI',
                interactive: true,
                title: '<img src="styles/legend/WPPNRI_3.png" /> WPP NRI'
            });
var format_lokasi_pendaratan_nelayan_PT_4 = new ol.format.GeoJSON();
var features_lokasi_pendaratan_nelayan_PT_4 = format_lokasi_pendaratan_nelayan_PT_4.readFeatures(json_lokasi_pendaratan_nelayan_PT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokasi_pendaratan_nelayan_PT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokasi_pendaratan_nelayan_PT_4.addFeatures(features_lokasi_pendaratan_nelayan_PT_4);
var lyr_lokasi_pendaratan_nelayan_PT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokasi_pendaratan_nelayan_PT_4, 
                style: style_lokasi_pendaratan_nelayan_PT_4,
                popuplayertitle: 'lokasi_pendaratan_nelayan_PT',
                interactive: true,
                title: '<img src="styles/legend/lokasi_pendaratan_nelayan_PT_4.png" /> lokasi_pendaratan_nelayan_PT'
            });
var format_LokasiIndikatifPenangkapan_5 = new ol.format.GeoJSON();
var features_LokasiIndikatifPenangkapan_5 = format_LokasiIndikatifPenangkapan_5.readFeatures(json_LokasiIndikatifPenangkapan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiIndikatifPenangkapan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiIndikatifPenangkapan_5.addFeatures(features_LokasiIndikatifPenangkapan_5);
var lyr_LokasiIndikatifPenangkapan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiIndikatifPenangkapan_5, 
                style: style_LokasiIndikatifPenangkapan_5,
                popuplayertitle: 'Lokasi Indikatif Penangkapan',
                interactive: true,
                title: '<img src="styles/legend/LokasiIndikatifPenangkapan_5.png" /> Lokasi Indikatif Penangkapan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BatasWPPNRI_1.setVisible(true);lyr_Batas12MilLaut_2.setVisible(true);lyr_WPPNRI_3.setVisible(true);lyr_lokasi_pendaratan_nelayan_PT_4.setVisible(true);lyr_LokasiIndikatifPenangkapan_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasWPPNRI_1,lyr_Batas12MilLaut_2,lyr_WPPNRI_3,lyr_lokasi_pendaratan_nelayan_PT_4,lyr_LokasiIndikatifPenangkapan_5];
lyr_BatasWPPNRI_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Km': 'Km', });
lyr_Batas12MilLaut_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Shape_Leng': 'Shape_Leng', 'KET': 'KET', });
lyr_WPPNRI_3.set('fieldAliases', {'NAMA_WPP': 'NAMA_WPP', 'Zona_Arkeo': 'Zona_Arkeo', 'JLR_PNKPN': 'JLR_PNKPN', });
lyr_lokasi_pendaratan_nelayan_PT_4.set('fieldAliases', {'NAME': 'NAME', 'Status': 'Status', 'X': 'X', 'Y': 'Y', });
lyr_LokasiIndikatifPenangkapan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DateTime': 'DateTime', 'Time': 'Time', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Battery_St': 'Battery_St', 'Message_Ty': 'Message_Ty', 'Lokasi': 'Lokasi', 'Landing_Si': 'Landing_Si', 'Nama_Kapal': 'Nama_Kapal', 'Nama_Nelay': 'Nama_Nelay', 'Implemente': 'Implemente', 'Local_Date': 'Local_Date', 'Local_Time': 'Local_Time', });
lyr_BatasWPPNRI_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Km': 'TextEdit', });
lyr_Batas12MilLaut_2.set('fieldImages', {'OBJECTID': 'Range', 'LEFT_FID': 'Range', 'RIGHT_FID': 'Range', 'Shape_Leng': 'TextEdit', 'KET': 'TextEdit', });
lyr_WPPNRI_3.set('fieldImages', {'NAMA_WPP': 'TextEdit', 'Zona_Arkeo': 'TextEdit', 'JLR_PNKPN': 'TextEdit', });
lyr_lokasi_pendaratan_nelayan_PT_4.set('fieldImages', {'NAME': 'TextEdit', 'Status': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LokasiIndikatifPenangkapan_5.set('fieldImages', {'OBJECTID': 'Range', 'DateTime': 'DateTime', 'Time': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Battery_St': 'TextEdit', 'Message_Ty': 'TextEdit', 'Lokasi': 'TextEdit', 'Landing_Si': 'TextEdit', 'Nama_Kapal': 'TextEdit', 'Nama_Nelay': 'TextEdit', 'Implemente': 'TextEdit', 'Local_Date': 'DateTime', 'Local_Time': 'DateTime', });
lyr_BatasWPPNRI_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Km': 'no label', });
lyr_Batas12MilLaut_2.set('fieldLabels', {'OBJECTID': 'no label', 'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'Shape_Leng': 'no label', 'KET': 'no label', });
lyr_WPPNRI_3.set('fieldLabels', {'NAMA_WPP': 'no label', 'Zona_Arkeo': 'no label', 'JLR_PNKPN': 'no label', });
lyr_lokasi_pendaratan_nelayan_PT_4.set('fieldLabels', {'NAME': 'no label', 'Status': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LokasiIndikatifPenangkapan_5.set('fieldLabels', {'OBJECTID': 'no label', 'DateTime': 'no label', 'Time': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Battery_St': 'no label', 'Message_Ty': 'no label', 'Lokasi': 'no label', 'Landing_Si': 'no label', 'Nama_Kapal': 'no label', 'Nama_Nelay': 'no label', 'Implemente': 'no label', 'Local_Date': 'no label', 'Local_Time': 'no label', });
lyr_LokasiIndikatifPenangkapan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});