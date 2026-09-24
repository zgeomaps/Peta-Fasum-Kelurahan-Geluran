/**
 * DATA GEOSPASIAL RESMI DESA/KELURAHAN GELURAN, TAMAN, SIDOARJO
 * Batas Desa diambil dari file: Desa_Geluran.geojson (Data Resmi Pemkab Sidoarjo)
 * Titik Fasum diambil dari koordinat terverifikasi lapangan pengguna (37 Titik Lengkap)
 */

// 1. BATAS RESMI DESA GELURAN (DARI FILE Desa_Geluran.geojson)
const batasDesaGeluranGeoJSON = {
"type": "FeatureCollection",
"name": "Desa_Geluran",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "OBJECTID": 160714.0, "NAMOBJ": "Geluran", "FCODE": "BA03070040", "REMARK": null, "METADATA": "TASWIL1000020230928_DATA_BATAS_DESAKELURAHAN", "SRS_ID": "SRGI 2013", "KDBBPS": null, "KDCBPS": null, "KDCPUM": "35.15.13", "KDEBPS": null, "KDEPUM": "35.15.13.1015", "KDPBPS": null, "KDPKAB": "35.15", "KDPPUM": "35", "LUASWH": 137.30126626000001, "TIPADM": 2.0, "WADMKC": "Taman", "WADMKD": "Geluran", "WADMKK": "Sidoarjo", "WADMPR": "Jawa Timur", "WIADKC": null, "WIADKK": null, "WIADPR": null, "WIADKD": null, "UUPP": "Hasil Sinkronisasi Data Pemerintah Daerah Tahun 2019", "LUAS": 137.30126626000001 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 112.692285671000036, -7.355505486000027, 0.0 ], [ 112.692799044000026, -7.355927786, 0.0 ], [ 112.692986425999948, -7.356097321, 0.0 ], [ 112.693248165999989, -7.35654049599998, 0.0 ], [ 112.693581290999987, -7.357102645, 0.0 ], [ 112.693878723000012, -7.357730227, 0.0 ], [ 112.694205066999984, -7.358366494, 0.0 ], [ 112.695372574999965, -7.358405893999986, 0.0 ], [ 112.695415035999986, -7.358264277999979, 0.0 ], [ 112.695670101000019, -7.358244824, 0.0 ], [ 112.695913757999961, -7.358197236000024, 0.0 ], [ 112.696083175000012, -7.358071599000027, 0.0 ], [ 112.696338223999987, -7.357907649000026, 0.0 ], [ 112.696366807, -7.35781461800002, 0.0 ], [ 112.69641630000001, -7.357706114, 0.0 ], [ 112.696511478000048, -7.357597613, 0.0 ], [ 112.696608559999959, -7.357523373999982, 0.0 ], [ 112.696734601, -7.357477312000015, 0.0 ], [ 112.696818741000016, -7.357450867000011, 0.0 ], [ 112.696876965, -7.357302558000015, 0.0 ], [ 112.696922649000044, -7.357214994, 0.0 ], [ 112.696989274999964, -7.357136947000015, 0.0 ], [ 112.697031151000033, -7.357064611999988, 0.0 ], [ 112.697090428000024, -7.356996749000018, 0.0 ], [ 112.697131574999958, -7.356976069999973, 0.0 ], [ 112.697258827000041, -7.356954979000022, 0.0 ], [ 112.697286908000024, -7.356954872000017, 0.0 ], [ 112.697269646, -7.356991096, 0.0 ], [ 112.697263852, -7.357019322999975, 0.0 ], [ 112.697263949999979, -7.357045088, 0.0 ], [ 112.697265351000055, -7.357099144000017, 0.0 ], [ 112.697280969999952, -7.357180173000017, 0.0 ], [ 112.697280451999973, -7.357259908, 0.0 ], [ 112.697237621, -7.357387807, 0.0 ], [ 112.697211510999978, -7.357474239999988, 0.0 ], [ 112.697213552999983, -7.357500539, 0.0 ], [ 112.697230805, -7.357579032999979, 0.0 ], [ 112.697245276, -7.357653287, 0.0 ], [ 112.697263189999944, -7.357793145000016, 0.0 ], [ 112.697210187999985, -7.357979340999975, 0.0 ], [ 112.697177298000042, -7.358080781000012, 0.0 ], [ 112.697220184, -7.358483969000019, 0.0 ], [ 112.697335772999963, -7.358667043000025, 0.0 ], [ 112.697412333999978, -7.359086752, 0.0 ], [ 112.697437134999973, -7.359322992999978, 0.0 ], [ 112.697420772999976, -7.359478367, 0.0 ], [ 112.697320442999967, -7.359744794999983, 0.0 ], [ 112.697301919999973, -7.359803627000019, 0.0 ], [ 112.697299487, -7.359870350999984, 0.0 ], [ 112.69730495500005, -7.359894379000025, 0.0 ], [ 112.69733184200004, -7.359934324999983, 0.0 ], [ 112.697380144000022, -7.359968853999987, 0.0 ], [ 112.697449944000027, -7.360000592, 0.0 ], [ 112.697506186000055, -7.360021803, 0.0 ], [ 112.697543747000054, -7.360040285000025, 0.0 ], [ 112.697576067, -7.360074875, 0.0 ], [ 112.697578884, -7.360128292000013, 0.0 ], [ 112.697579067, -7.360176384, 0.0 ], [ 112.697565832, -7.360211149, 0.0 ], [ 112.697547188000044, -7.360237887999972, 0.0 ], [ 112.697483276999947, -7.36032094, 0.0 ], [ 112.697430127999951, -7.360415376, 0.0 ], [ 112.69743693199996, -7.360548075999986, 0.0 ], [ 112.697509244, -7.360761222, 0.0 ], [ 112.697757988000035, -7.361336848, 0.0 ], [ 112.697785550000049, -7.361441185, 0.0 ], [ 112.697846832999971, -7.361579414, 0.0 ], [ 112.69788896600005, -7.361707874999979, 0.0 ], [ 112.697854166999946, -7.361984554, 0.0 ], [ 112.697793919999981, -7.362058718000014, 0.0 ], [ 112.697294811, -7.362282155, 0.0 ], [ 112.697043948999976, -7.36233187, 0.0 ], [ 112.696430029999988, -7.362440054999979, 0.0 ], [ 112.696506161, -7.362584012000013, 0.0 ], [ 112.696620075000055, -7.362883021000016, 0.0 ], [ 112.696640998000021, -7.363171748000013, 0.0 ], [ 112.696696845000019, -7.36357016, 0.0 ], [ 112.696796644999949, -7.363870487999975, 0.0 ], [ 112.69685056000003, -7.364071997999986, 0.0 ], [ 112.696893874000011, -7.364294111, 0.0 ], [ 112.696992503000047, -7.364691908999987, 0.0 ], [ 112.697138920000043, -7.364930786, 0.0 ], [ 112.697209679000025, -7.365044112000021, 0.0 ], [ 112.697681555000031, -7.365085272999977, 0.0 ], [ 112.697920543, -7.36518801699998, 0.0 ], [ 112.697999700999958, -7.365373965, 0.0 ], [ 112.698061813999971, -7.365588369000022, 0.0 ], [ 112.698093167000025, -7.365776922, 0.0 ], [ 112.698106635000045, -7.365980068, 0.0 ], [ 112.698132063, -7.36609447799998, 0.0 ], [ 112.698206565999953, -7.366321464, 0.0 ], [ 112.698186934999967, -7.366501073999984, 0.0 ], [ 112.698168055999986, -7.366877487000011, 0.0 ], [ 112.698163848000036, -7.367930132000026, 0.0 ], [ 112.698011491999978, -7.369400543999973, 0.0 ], [ 112.697947727000042, -7.370177945000023, 0.0 ], [ 112.697896841999977, -7.370183886, 0.0 ], [ 112.697782458, -7.370201448999978, 0.0 ], [ 112.697480563999989, -7.370215514999984, 0.0 ], [ 112.697267706000048, -7.370200532000013, 0.0 ], [ 112.696968579999975, -7.370185877999972, 0.0 ], [ 112.696783063999987, -7.370176533, 0.0 ], [ 112.696552923000013, -7.370154442, 0.0 ], [ 112.696353006999971, -7.370139408999989, 0.0 ], [ 112.696213554999986, -7.370144244000016, 0.0 ], [ 112.696007903, -7.370133539999983, 0.0 ], [ 112.695721728999956, -7.37012170700001, 0.0 ], [ 112.69552325899997, -7.370109539999987, 0.0 ], [ 112.695117591999974, -7.370057969000015, 0.0 ], [ 112.694842885999947, -7.370037477999972, 0.0 ], [ 112.694661759000041, -7.370048211999972, 0.0 ], [ 112.694463368000015, -7.370056139999974, 0.0 ], [ 112.694325373999959, -7.370066711, 0.0 ], [ 112.69393714, -7.370062440000027, 0.0 ], [ 112.693586688999972, -7.370162812, 0.0 ], [ 112.693332444000021, -7.370229802999972, 0.0 ], [ 112.693328201999975, -7.370249800000011, 0.0 ], [ 112.692750903000046, -7.370228882999982, 0.0 ], [ 112.692213144, -7.370178914, 0.0 ], [ 112.691918964000024, -7.370162892999986, 0.0 ], [ 112.691428794999979, -7.370167650999974, 0.0 ], [ 112.691057599000032, -7.37017003, 0.0 ], [ 112.690736354000023, -7.370160903999988, 0.0 ], [ 112.690506366000022, -7.370150556, 0.0 ], [ 112.690304681000043, -7.370164390000014, 0.0 ], [ 112.690166627000053, -7.370163247, 0.0 ], [ 112.689817345000051, -7.370145286000024, 0.0 ], [ 112.689618443999962, -7.370137043999989, 0.0 ], [ 112.689449955999976, -7.370131959, 0.0 ], [ 112.689362392000021, -7.370124345000022, 0.0 ], [ 112.689210106000019, -7.370069144000013, 0.0 ], [ 112.689033771000027, -7.369971807000013, 0.0 ], [ 112.688868414000012, -7.369895917, 0.0 ], [ 112.688760864999949, -7.369835003, 0.0 ], [ 112.688592397999969, -7.369764571000019, 0.0 ], [ 112.688475328999971, -7.369723643999976, 0.0 ], [ 112.688324945999966, -7.369691284, 0.0 ], [ 112.688189793, -7.369701753000015, 0.0 ], [ 112.68806891700001, -7.369733161999989, 0.0 ], [ 112.687983256000052, -7.369753151, 0.0 ], [ 112.687913775999959, -7.369738872000028, 0.0 ], [ 112.687895590000039, -7.369712564, 0.0 ], [ 112.687869993000049, -7.369669392, 0.0 ], [ 112.687870946999965, -7.369604673000026, 0.0 ], [ 112.687870944999986, -7.369543755999985, 0.0 ], [ 112.687900450000029, -7.369479986999977, 0.0 ], [ 112.687921391000032, -7.369434302, 0.0 ], [ 112.687967351, -7.369387457000016, 0.0 ], [ 112.68797809900002, -7.369331392999982, 0.0 ], [ 112.687977545999956, -7.369267739, 0.0 ], [ 112.687964696999984, -7.369249894, 0.0 ], [ 112.688000387999978, -7.368997671999978, 0.0 ], [ 112.688024183000039, -7.368790656999977, 0.0 ], [ 112.688083669999969, -7.368531297, 0.0 ], [ 112.688152673, -7.368095853999989, 0.0 ], [ 112.688233575000027, -7.367622342, 0.0 ], [ 112.688257369999974, -7.367510509, 0.0 ], [ 112.688252611000053, -7.367336807000015, 0.0 ], [ 112.688257369999974, -7.367132175, 0.0 ], [ 112.688270457000044, -7.367022717, 0.0 ], [ 112.688300199999958, -7.366901365, 0.0 ], [ 112.688351358999967, -7.366711009000028, 0.0 ], [ 112.688382292000028, -7.366537307999977, 0.0 ], [ 112.688404897000055, -7.366413575000024, 0.0 ], [ 112.688432259000024, -7.366304120999985, 0.0 ], [ 112.688463192999961, -7.366118523000011, 0.0 ], [ 112.688489366999988, -7.365940062999982, 0.0 ], [ 112.68851435199997, -7.365710444, 0.0 ], [ 112.688529818, -7.365564108, 0.0 ], [ 112.688552423000033, -7.365442755, 0.0 ], [ 112.688552423000033, -7.365314265, 0.0 ], [ 112.68856194, -7.365173875999972, 0.0 ], [ 112.688602392, -7.364988278, 0.0 ], [ 112.688633323999966, -7.364761040000019, 0.0 ], [ 112.688644032999946, -7.364646826000012, 0.0 ], [ 112.688653551000016, -7.364552837000019, 0.0 ], [ 112.688694001000044, -7.364517147000015, 0.0 ], [ 112.688778470999978, -7.364467177999984, 0.0 ], [ 112.688859374, -7.364437432999978, 0.0 ], [ 112.688945192, -7.36444235099998, 0.0 ], [ 112.68913274, -7.364454744999989, 0.0 ], [ 112.689222112000039, -7.364425088000019, 0.0 ], [ 112.689267795999967, -7.364284223000027, 0.0 ], [ 112.68929825400005, -7.364074830999982, 0.0 ], [ 112.689263988, -7.363804526000024, 0.0 ], [ 112.689260182999988, -7.363608457, 0.0 ], [ 112.689267795999967, -7.363442846, 0.0 ], [ 112.689210689, -7.363321019000011, 0.0 ], [ 112.689161195999986, -7.363208709, 0.0 ], [ 112.689183218000039, -7.36308326, 0.0 ], [ 112.68923689099995, -7.362938777000011, 0.0 ], [ 112.68931484999996, -7.36277802, 0.0 ], [ 112.689314494999962, -7.362684546000025, 0.0 ], [ 112.689327746, -7.36263369, 0.0 ], [ 112.689384348999965, -7.362490856000022, 0.0 ], [ 112.689442887000041, -7.362312423, 0.0 ], [ 112.689416960000017, -7.362311735, 0.0 ], [ 112.68948280799998, -7.362006722999979, 0.0 ], [ 112.689518499999963, -7.361842539, 0.0 ], [ 112.689544199000011, -7.361799709000024, 0.0 ], [ 112.689598943999954, -7.361786191000022, 0.0 ], [ 112.68997241, -7.361791202, 0.0 ], [ 112.689986778000048, -7.36177115800001, 0.0 ], [ 112.690013903000022, -7.361682640000026, 0.0 ], [ 112.690061016999948, -7.361308588999975, 0.0 ], [ 112.690106703999959, -7.360967373999983, 0.0 ], [ 112.69016238100005, -7.360597606, 0.0 ], [ 112.690226455000015, -7.360337413000025, 0.0 ], [ 112.69028341, -7.35989136500001, 0.0 ], [ 112.690360426999973, -7.359270691, 0.0 ], [ 112.690348664999988, -7.359036203000016, 0.0 ], [ 112.690327724999975, -7.358895341, 0.0 ], [ 112.690266812, -7.358684042999982, 0.0 ], [ 112.690156405000039, -7.358385183, 0.0 ], [ 112.690019346999975, -7.358118682999987, 0.0 ], [ 112.689792822999948, -7.357663732, 0.0 ], [ 112.689721205999945, -7.357431948, 0.0 ], [ 112.689657756999964, -7.357228131, 0.0 ], [ 112.689454315000035, -7.356442313, 0.0 ], [ 112.689364489000013, -7.356027692, 0.0 ], [ 112.68929768199996, -7.355754064999985, 0.0 ], [ 112.68929600599995, -7.355752037, 0.0 ], [ 112.689301764, -7.355743688000018, 0.0 ], [ 112.689428460000045, -7.355630867, 0.0 ], [ 112.689572256000019, -7.355571712000028, 0.0 ], [ 112.689684781999972, -7.355544970999972, 0.0 ], [ 112.690024762, -7.355465939999988, 0.0 ], [ 112.690032151999958, -7.355518540999981, 0.0 ], [ 112.690363765000029, -7.355445519999989, 0.0 ], [ 112.690438005000033, -7.355433278000021, 0.0 ], [ 112.690417306999962, -7.355296840999983, 0.0 ], [ 112.690497532, -7.355290070000024, 0.0 ], [ 112.690631651999979, -7.355270425000015, 0.0 ], [ 112.690719675999958, -7.355227986999978, 0.0 ], [ 112.690943685999969, -7.35515250200001, 0.0 ], [ 112.691347812, -7.355053367999972, 0.0 ], [ 112.691446790999976, -7.355372612999986, 0.0 ], [ 112.691473803, -7.355418445999987, 0.0 ], [ 112.69160527400004, -7.355205508999973, 0.0 ], [ 112.691660642999977, -7.355145967, 0.0 ], [ 112.691728098, -7.355169492000016, 0.0 ], [ 112.691801928000018, -7.355200672000024, 0.0 ], [ 112.691962286000035, -7.355302946, 0.0 ], [ 112.692218950999973, -7.355475817000013, 0.0 ], [ 112.692285671000036, -7.355505486000027, 0.0 ] ] ] ] } }
]
};

// 2. FASILITAS UMUM (FASUM) TERVERIFIKASI PENGGUNA (37 TITIK LENGKAP)
const fasumGeluranGeoJSON = {
  "type": "FeatureCollection",
  "name": "Fasum_Geluran_Verified",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "nama": "SDN Geluran 1",
        "kategori": "Pendidikan",
        "sub_kategori": "Sekolah Dasar Negeri",
        "icon": "🏫",
        "warna_bg": "#2563EB",
        "alamat": "Jl. Raya Geluran No. 27",
        "keterangan": "SD Negeri rujukan terakreditasi A di Kelurahan Geluran."
      },
      "geometry": { "type": "Point", "coordinates": [112.69114999992424, -7.355393099717247] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "SDN Geluran 2",
        "kategori": "Pendidikan",
        "sub_kategori": "Sekolah Dasar Negeri",
        "icon": "🏫",
        "warna_bg": "#2563EB",
        "alamat": "Jl. Raya Geluran No. 27",
        "keterangan": "SD Negeri berwawasan Adiwiyata dan lingkungan hijau."
      },
      "geometry": { "type": "Point", "coordinates": [112.69136674825096, -7.355240798054728] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "MI Islamiyah Geluran",
        "kategori": "Pendidikan",
        "sub_kategori": "Madrasah Ibtidaiyah",
        "icon": "🏫",
        "warna_bg": "#059669",
        "alamat": "Jl. Imam Bonjol No. 28, RT 06 / RW 02, Geluran",
        "keterangan": "Lembaga pendidikan Islam dasar di bawah LP Ma'arif NU."
      },
      "geometry": { "type": "Point", "coordinates": [112.69377784902818, -7.3579810264553895] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "SDN Geluran 3",
        "kategori": "Pendidikan",
        "sub_kategori": "Sekolah Dasar Negeri",
        "icon": "🏫",
        "warna_bg": "#2563EB",
        "alamat": "Kawasan Pemukiman Geluran",
        "keterangan": "Sekolah Dasar Negeri melayani pendidikan anak usia dasar."
      },
      "geometry": { "type": "Point", "coordinates": [112.6948228202608, -7.364704854420075] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "TK Dharma Wanita Geluran",
        "kategori": "Pendidikan",
        "sub_kategori": "Taman Kanak-Kanak / PAUD",
        "icon": "🎒",
        "warna_bg": "#0EA5E9",
        "alamat": "Jl. Imam Bonjol, Geluran",
        "keterangan": "Sarana pendidikan anak usia dini binaan TP-PKK / Dharma Wanita."
      },
      "geometry": { "type": "Point", "coordinates": [112.69339228434221, -7.3593440743824585] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "MA Jabal Noer",
        "kategori": "Pendidikan",
        "sub_kategori": "Madrasah Aliyah",
        "icon": "🎓",
        "warna_bg": "#10B981",
        "alamat": "Kompleks Yayasan Jabal Noer Geluran",
        "keterangan": "Pendidikan menengah Islam tingkat Aliyah berbasis keagamaan dan kurikulum terpadu."
      },
      "geometry": { "type": "Point", "coordinates": [112.69287185109218, -7.359215671453989] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Pondok Pesantren Jabal Noer",
        "kategori": "Pendidikan",
        "sub_kategori": "Pondok Pesantren",
        "icon": "🕌",
        "warna_bg": "#047857",
        "alamat": "Geluran, Kec. Taman, Kab. Sidoarjo",
        "keterangan": "Lembaga pesantren pendidikan kitab kuning, tahfidz Al-Qur'an dan akhlak."
      },
      "geometry": { "type": "Point", "coordinates": [112.6928386721965, -7.3588097993842965] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "TPQ Tahsinul Qur'an Al-Awaliya",
        "kategori": "Pendidikan",
        "sub_kategori": "Taman Pendidikan Al-Qur'an",
        "icon": "📖",
        "warna_bg": "#059669",
        "alamat": "Geluran, Taman, Sidoarjo",
        "keterangan": "Lembaga pembelajaran baca tulis dan tahsin Al-Qur'an bagi santri cilik."
      },
      "geometry": { "type": "Point", "coordinates": [112.69444503524016, -7.359603373733399] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Kopi Kenangan Geluran",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Kedai Kopi & Minuman Kekinian",
        "icon": "☕",
        "warna_bg": "#78350F",
        "alamat": "Jl. Raya Geluran",
        "keterangan": "Outlet resmi Kopi Kenangan menyediakan aneka kopi kenangan mantan dan minuman segar."
      },
      "geometry": { "type": "Point", "coordinates": [112.69223453656126, -7.35681725814357] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "KFC Geluran",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Restoran Cepat Saji (Fast Food)",
        "icon": "🍗",
        "warna_bg": "#DC2626",
        "alamat": "Jl. Raya Geluran, Kec. Taman",
        "keterangan": "Restoran fast food ayam goreng krispi internasional dengan layanan santap di tempat dan bawa pulang."
      },
      "geometry": { "type": "Point", "coordinates": [112.69258398724149, -7.35650836533566] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Richeese Geluran",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Restoran Cepat Saji (Ayam Saus Keju)",
        "icon": "🧀",
        "warna_bg": "#EA580C",
        "alamat": "Jl. Raya Geluran",
        "keterangan": "Kuliner ayam pedas dengan saus keju khas Fire Wings dan Fire Chicken favorit anak muda."
      },
      "geometry": { "type": "Point", "coordinates": [112.69235911869404, -7.356580638732115] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Mcd Geluran",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Restoran Cepat Saji (Fast Food)",
        "icon": "🍔",
        "warna_bg": "#EAB308",
        "alamat": "Jl. Raya Geluran No. 1, Geluran",
        "keterangan": "McDonald's Taman Sidoarjo dengan layanan 24 jam, drive-thru, dan McCafe."
      },
      "geometry": { "type": "Point", "coordinates": [112.69286920025753, -7.356379977533171] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Gacoan Geluran",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Restoran Mie Pedas & Dimsum",
        "icon": "🍜",
        "warna_bg": "#EC4899",
        "alamat": "Jl. Raya Geluran, Kec. Taman",
        "keterangan": "Mie Gacoan favorit dengan aneka level pedas, pangsit goreng renyah, dan dimsum."
      },
      "geometry": { "type": "Point", "coordinates": [112.69309595179048, -7.356747542227432] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Burger Bangor",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Kuliner Burger Daging Panggang",
        "icon": "🍔",
        "warna_bg": "#D97706",
        "alamat": "Jl. Raya Geluran",
        "keterangan": "Burger lezat dengan daging sapi Australia asli dan aneka varian rasa kekinian."
      },
      "geometry": { "type": "Point", "coordinates": [112.69348354189218, -7.357248283984338] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Bakso Tenis",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Warung Bakso & Mie",
        "icon": "🍲",
        "warna_bg": "#C2410C",
        "alamat": "Geluran, Taman",
        "keterangan": "Bakso daging sapi porsi besar dengan kuah kaldu gurih segar."
      },
      "geometry": { "type": "Point", "coordinates": [112.69484695433371, -7.35972421057228] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Ayam Guling Enakko",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Kuliner Ayam Guling Panggang",
        "icon": "🍗",
        "warna_bg": "#EA580C",
        "alamat": "Kawasan Taman Pondok Jati, Geluran",
        "keterangan": "Ayam guling bumbu rempah meresap dengan sambal spesial."
      },
      "geometry": { "type": "Point", "coordinates": [112.69579434190621, -7.364246318221636] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Soto Ayam G Enak",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Kuliner Soto Ayam Tradisional",
        "icon": "🥣",
        "warna_bg": "#F59E0B",
        "alamat": "Kawasan Taman Pondok Jati, Geluran",
        "keterangan": "Soto ayam kuah kuning kaya koya dan suwiran ayam gurih nikmat."
      },
      "geometry": { "type": "Point", "coordinates": [112.69573176411977, -7.3649007636853225] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Bakso dan Mie Ayam Putri Solo",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Warung Bakso & Mie Ayam",
        "icon": "🍜",
        "warna_bg": "#D97706",
        "alamat": "Taman Pondok Jati, Geluran",
        "keterangan": "Bakso halus, bakso urat dan mie ayam khas cita rasa Solo legendaris."
      },
      "geometry": { "type": "Point", "coordinates": [112.69576965375975, -7.365589401364055] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "RM Surya Minang",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Rumah Makan Masakan Padang",
        "icon": "🍛",
        "warna_bg": "#B45309",
        "alamat": "Taman Pondok Jati, Geluran",
        "keterangan": "Masakan Padang autentik dengan rendang empuk, ayam pop, gulai tunjang dan sambal hijau."
      },
      "geometry": { "type": "Point", "coordinates": [112.69575458473403, -7.365796317556089] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Beli Kopi Pondok Jati",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Cafe & Kedai Kopi Santai",
        "icon": "☕",
        "warna_bg": "#78350F",
        "alamat": "Ruko Taman Pondok Jati, Geluran",
        "keterangan": "Tempat nongkrong asik dengan racikan kopi susu gula aren dan camilan kekinian."
      },
      "geometry": { "type": "Point", "coordinates": [112.69535390170154, -7.366241973586727] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Tobys Geluran",
        "kategori": "Restoran / Kuliner",
        "sub_kategori": "Restoran Fried Chicken",
        "icon": "🍗",
        "warna_bg": "#DC2626",
        "alamat": "Taman Pondok Jati, Geluran",
        "keterangan": "Menu ayam goreng renyah, burger, kentang goreng dengan harga terjangkau."
      },
      "geometry": { "type": "Point", "coordinates": [112.6956182980733, -7.366942898201629] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Masjid Subakir",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Masjid Jami'",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#16A34A",
        "alamat": "Geluran, Kec. Taman, Kab. Sidoarjo",
        "keterangan": "Masjid pusat kegiatan salat berjamaah, pengajian warga dan peringatan hari besar Islam."
      },
      "geometry": { "type": "Point", "coordinates": [112.69533325763796, -7.363163069218266] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Langgar Miftakhul Jannah",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Langgar / Musholla Pemukiman",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#15803D",
        "alamat": "Geluran Krajan, Kec. Taman",
        "keterangan": "Tempat ibadah warga lingkungan sekitar untuk salat fardhu dan pembinaan baca Al-Qur'an."
      },
      "geometry": { "type": "Point", "coordinates": [112.69421099496006, -7.358715534703786] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Masjid Darul Falah",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Masjid Warga",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#16A34A",
        "alamat": "Geluran Krajan Barat, Taman",
        "keterangan": "Masjid pemukiman aktif dengan majelis taklim ibu-ibu dan kegiatan anak sholeh."
      },
      "geometry": { "type": "Point", "coordinates": [112.69164197456092, -7.358638109807234] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Masjid Al-Hidayah",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Masjid Jami'",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#16A34A",
        "alamat": "Geluran, Taman",
        "keterangan": "Masjid lingkungan yang makmur menyelenggarakan kegiatan keagamaan dan sosial kemasyarakatan."
      },
      "geometry": { "type": "Point", "coordinates": [112.69090527734738, -7.362830572399701] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Masjid Al-Muhajirin",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Masjid Pemukiman",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#15803D",
        "alamat": "Kawasan Pemukiman Geluran, Taman",
        "keterangan": "Sarana ibadah dan pembinaan kerohanian umat Islam warga Geluran."
      },
      "geometry": { "type": "Point", "coordinates": [112.69356502662097, -7.3661920530102964] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Masjid Al-Mukhlisin",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Masjid Pemukiman",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#16A34A",
        "alamat": "Taman Pondok Jati, Geluran",
        "keterangan": "Masjid pemukiman warga perumahan untuk beribadah dan mempererat silaturahmi jamaah."
      },
      "geometry": { "type": "Point", "coordinates": [112.69676225816828, -7.36885730115627] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Langgar Waqof Sabillus Salam",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Langgar Waqof Warga",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#15803D",
        "alamat": "Geluran Krajan, Taman",
        "keterangan": "Tempat ibadah wakaf yang digunakan untuk salat berjamaah dan tadarus Al-Qur'an."
      },
      "geometry": { "type": "Point", "coordinates": [112.69525408142694, -7.3600517384107] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Masjid Nurul Jannah",
        "kategori": "Tempat Ibadah",
        "sub_kategori": "Masjid Pemukiman",
        "agama": "Islam",
        "icon": "🕌",
        "warna_bg": "#16A34A",
        "alamat": "Geluran Selatan, Taman",
        "keterangan": "Masjid di sektor selatan melayani ibadah salat harian dan salat Jumat berjamaah."
      },
      "geometry": { "type": "Point", "coordinates": [112.6931724749162, -7.36903024828409] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Kantor Kelurahan Geluran",
        "kategori": "Pemerintahan",
        "sub_kategori": "Kantor Kelurahan / Balai Desa",
        "icon": "🏛️",
        "warna_bg": "#0284C7",
        "alamat": "Geluran, Kec. Taman, Kab. Sidoarjo 61257",
        "keterangan": "Pusat pemerintahan dan pelayanan administrasi kependudukan resmi Kelurahan Geluran."
      },
      "geometry": { "type": "Point", "coordinates": [112.69526968685449, -7.360486196979264] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Toko DIAN",
        "kategori": "Pemerintahan",
        "sub_kategori": "Pusat Perbelanjaan & Toko Warga",
        "icon": "🏪",
        "warna_bg": "#0369A1",
        "alamat": "Geluran, Kec. Taman",
        "keterangan": "Toko penyedia aneka kebutuhan harian, sembako, dan perlengkapan rumah tangga."
      },
      "geometry": { "type": "Point", "coordinates": [112.69537085664014, -7.369488234189297] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Alfamidi Taman Pondok Jati",
        "kategori": "Pemerintahan",
        "sub_kategori": "Supermarket / Minimarket Modern",
        "icon": "🛒",
        "warna_bg": "#DC2626",
        "alamat": "Jl. Taman Pondok Jati, Geluran",
        "keterangan": "Minimarket modern menyediakan produk segar, buah, sembako, dan aneka kebutuhan harian."
      },
      "geometry": { "type": "Point", "coordinates": [112.69508947150027, -7.368125383960168] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Indomaret Point Pondok Jati",
        "kategori": "Pemerintahan",
        "sub_kategori": "Minimarket Modern & Point Coffee",
        "icon": "🏪",
        "warna_bg": "#2563EB",
        "alamat": "Taman Pondok Jati, Geluran",
        "keterangan": "Minimarket 24 jam dengan fasilitas Point Coffee dan aneka makanan siap saji."
      },
      "geometry": { "type": "Point", "coordinates": [112.69541699608018, -7.365432365021674] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Lapangan Kuto Anyar Geluran",
        "kategori": "Pemerintahan",
        "sub_kategori": "Sarana Olahraga Publik",
        "icon": "⚽",
        "warna_bg": "#16A34A",
        "alamat": "Kuto Anyar, Geluran, Taman",
        "keterangan": "Lapangan serbaguna untuk olahraga sepak bola, kegiatan kemasyarakatan dan upacara warga."
      },
      "geometry": { "type": "Point", "coordinates": [112.69489919331726, -7.36422947418776] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Kolam Pancing Kutho Anyar",
        "kategori": "Pemerintahan",
        "sub_kategori": "Sarana Rekreasi Pemancingan",
        "icon": "🎣",
        "warna_bg": "#0891B2",
        "alamat": "Kutho Anyar, Geluran, Taman",
        "keterangan": "Destinasi rekreasi pemancingan ikan air tawar favorit warga Geluran dan sekitarnya."
      },
      "geometry": { "type": "Point", "coordinates": [112.69457550522785, -7.364768312728742] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "Makam Islam Kelurahan Geluran",
        "kategori": "Pemerintahan",
        "sub_kategori": "Tempat Pemakaman Umum (TPU)",
        "icon": "🪦",
        "warna_bg": "#475569",
        "alamat": "Geluran, Kec. Taman, Kab. Sidoarjo",
        "keterangan": "Area pemakaman umum muslim warga Kelurahan Geluran yang terawat dan tertata rapi."
      },
      "geometry": { "type": "Point", "coordinates": [112.69397540338933, -7.36270250125223] }
    },
    {
      "type": "Feature",
      "properties": {
        "nama": "JNE Geluran",
        "kategori": "Pemerintahan",
        "sub_kategori": "Kantor Ekspedisi & Jasa Pengiriman",
        "icon": "📦",
        "warna_bg": "#B91C1C",
        "alamat": "Geluran, Taman, Sidoarjo",
        "keterangan": "Gerai resmi pengiriman logistik paket dan dokumen JNE Express untuk kemudahan warga."
      },
      "geometry": { "type": "Point", "coordinates": [112.69505047719692, -7.360267951258467] }
    }
  ]
};

