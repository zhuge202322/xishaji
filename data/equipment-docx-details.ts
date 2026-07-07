export type EquipmentDocxImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type EquipmentDocxDetail = {
  title: string;
  originalTitle: string;
  sourceDocument: string;
  intro: string;
  advantages: string[];
  productImage: EquipmentDocxImage | null;
  parameterImage: EquipmentDocxImage | null;
};

export const equipmentDocxDetails: Record<string, EquipmentDocxDetail> = {
  "belt-conveyor": {
    "title": "Belt conveyor",
    "originalTitle": "带式输送机",
    "sourceDocument": "配套系统.docx",
    "intro": "带式输送机是一种通用输送设备，由单机或多机组合成输送系统，广泛地应用在矿山、冶金、煤炭等部门，用来输送松散物料或成件物品。适用环境温度为 -10°C至 +40°C。",
    "advantages": [
      "输送能力强，运输距离远，运行平稳，工作可靠，生产率高，易于实现自动化和集中化控制；",
      "输送范围广，可以连续输送潮湿的、干燥的、粉状和块状以及成件物品，并可向多点受料或卸料；",
      "结构简单，易于维护，主要零部件的互换性和通用性强。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/belt-conveyor-product.png",
      "width": 310,
      "height": 274,
      "alt": "Belt conveyor product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/belt-conveyor-parameters.png",
      "width": 2120,
      "height": 1264,
      "alt": "Belt conveyor technical parameter table from VICMACH technical document"
    }
  },
  "bowl-concentrator": {
    "title": "Bowl concentrator",
    "originalTitle": "皮碗离心机",
    "sourceDocument": "选别设备.docx",
    "intro": "皮碗离心机是一种带有螺旋刻槽的连续式重力选矿设备，常用于砂金、岩金矿回收细颗粒单体金。 碗式离心机使用带有螺旋刻槽的橡胶皮碗，类似于旋转螺旋溜槽的原理，其沿与转鼓旋转相反的方向向下螺旋这种螺旋刻槽通过旋转并保持持续进料产生离心力，从而使黄金被推压到碗壁上。",
    "advantages": [
      "高富集比，高回收率",
      "去除非磁性和磁性砂 , 且不损失细金",
      "带有螺旋式自清洁的刻槽",
      "紧凑的设计，占地空间较小，易于融入到现有的现况设备中使用"
    ],
    "productImage": {
      "src": "/images/equipment-docx/bowl-concentrator-product.png",
      "width": 317,
      "height": 320,
      "alt": "Bowl concentrator product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/bowl-concentrator-parameters.png",
      "width": 3096,
      "height": 524,
      "alt": "Bowl concentrator technical parameter table from VICMACH technical document"
    }
  },
  "c-series-impact-crusher": {
    "title": "C series impact crusher",
    "originalTitle": "C系列反击式破碎机",
    "sourceDocument": "破碎筛分.docx",
    "intro": "C 系列反击式破碎机综合了当前国内国际先进反击式破碎机技术，针对不同应用对转子和破碎腔型精细化设计，大量采用新型高耐磨材料 ,使得设备性能和处理量大幅度提高。在中等硬度低磨蚀性的采石和砾石、水泥、混凝土和沥青回收利用、矿渣回收利用等行业的应用中均表现出卓越的破碎效果。",
    "advantages": [
      "精细化设计的转子和腔型、转速和功率合理匹配，满足粗碎、中细碎和物料回收的不同应用选择 ;坚固的重型转子结构，提高了设备处理量和破碎比；高质量的焊接结构确保机器能承受最大冲击并获得良好的破碎效果；船型板锤，牢靠的锁紧结构，具有良好的抗冲击、抗磨损性能并保持持料粒度稳定；"
    ],
    "productImage": {
      "src": "/images/equipment-docx/c-series-impact-crusher-product.png",
      "width": 276,
      "height": 281,
      "alt": "C series impact crusher product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/c-series-impact-crusher-parameters.png",
      "width": 680,
      "height": 206,
      "alt": "C series impact crusher technical parameter table from VICMACH technical document"
    }
  },
  "centrifugal-concentrator": {
    "title": "Centrifugal concentrator",
    "originalTitle": "离心选矿机",
    "sourceDocument": "选别设备.docx",
    "intro": "离心选矿机的转鼓以一定的转数高速旋转，矿浆由给矿分矿器经给矿嘴分两处送入转鼓的内壁上。矿浆随鼓高速旋转，在离心力的作用下重矿物沉积于转鼓的内壁上并随转鼓一起旋转，矿浆中的轻矿粒以一定的差速随转鼓旋转 , 在旋转过程中以一定的螺旋角由给矿端沿转鼓坡度方向向排矿端旋转流动，到末端经排矿分矿器排出，即为尾矿高富集比高回收率 ; 选矿过程稳定可靠 ; 不添加任何化学药剂 , 保护环境 ; 用水少耗电量低 ; 低生产成本 , 易损件耐磨性好 , 维护简单 ; 设计紧凑 , 占地小，易于融入现有选矿生产线的工艺中。",
    "advantages": [
      "处理能力大，结构简单 ; 占地面积小，自动化程度高",
      "低生产成本 , 易损件耐磨性好 , 维护简单",
      "离心选矿机利用离心力的作用 , 强化了重选过程 , 缩短分选时间"
    ],
    "productImage": {
      "src": "/images/equipment-docx/centrifugal-concentrator-product.png",
      "width": 479,
      "height": 438,
      "alt": "Centrifugal concentrator product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/centrifugal-concentrator-parameters.png",
      "width": 3376,
      "height": 864,
      "alt": "Centrifugal concentrator technical parameter table from VICMACH technical document"
    }
  },
  "ceramic-vacuum-filter": {
    "title": "Ceramic vacuum filter",
    "originalTitle": "陶瓷真空过滤机",
    "sourceDocument": "浓缩脱水.docx",
    "intro": "陶瓷真空过滤机是一种利用真空吸力和毛细作用实现高效固液分离的工业脱水设备。它采用微孔陶瓷板作为过滤介质，无需传统滤布，通过吸浆、淋洗、干燥和自动卸料等连续步骤完成脱水。该设备具有极其省电（节能90%以上）、脱水效果好、滤液清澈等优势，广泛应用于矿山、化工及环保污泥处理等领域。",
    "advantages": [
      "高真空度 ( 真空度 -0.09—0.098MPa)，饼含水率低",
      "过滤精度高，滤液固含量达 50ppm，可在系统中循环使用",
      "节约能耗 90% 以上，运行成本低",
      "安装滤饼清洗系统",
      "PLC 与计算机集成，实现阀门自动控制 ; 自动化程度高，劳动强度低",
      "结构紧凑 ; 占地面积小 ; 维修方便",
      "先进的排水系统，确保在任何运行条件下的应用。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/ceramic-vacuum-filter-product.png",
      "width": 257,
      "height": 208,
      "alt": "Ceramic vacuum filter product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/ceramic-vacuum-filter-parameters.png",
      "width": 3568,
      "height": 1860,
      "alt": "Ceramic vacuum filter technical parameter table from VICMACH technical document"
    }
  },
  "cs-multi-cylinder-cone-crusher": {
    "title": "CS multi-cylinder cone crusher",
    "originalTitle": "CS系列多缸圆锥破碎机",
    "sourceDocument": "破碎筛分.docx",
    "intro": "CS 圆锥破碎机是在弹簧圆锥破碎机的基础上研发和设计的一款高效破碎机， 采用了先进的自动控制设计理念，可广泛用于矿山、建材、冶金等领域的二次破碎和精细破碎。该破碎机可破碎金属矿石、玄武岩、花岗岩、石灰石、鹅卵石、砂岩等中高硬度物料。",
    "advantages": [
      "层压破碎设计利用层压破碎原理对物料进行破碎， 破碎效率高， 易损件磨耗低。 破碎后成品呈立方体，细粒级含量高， 可满足一些高品质骨料的使用需求。 过载保护系统当有不能破碎的物料进入设备破碎腔时，以高性能合金钢弹簧为核心的过载保护系统，能有效保护设备的安全。 稀油润滑系统 稀油润滑系统采用双油泵、双过滤器冗余设计，在设备启动前就可进行润滑，适应性强，易于控制，延长了零件使用寿命。 液压清腔系统CS 液压式清腔系统可在设备发生闷车等非正常停机的情况下，通过液压起顶使定动锥间隙增大，方便清腔，节省维护时间。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/cs-multi-cylinder-cone-crusher-product.png",
      "width": 513,
      "height": 454,
      "alt": "CS multi-cylinder cone crusher product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/cs-multi-cylinder-cone-crusher-parameters.png",
      "width": 724,
      "height": 379,
      "alt": "CS multi-cylinder cone crusher technical parameter table from VICMACH technical document"
    }
  },
  "ct-permanent-magnetic-drum-separator": {
    "title": "CT permanent magnetic drum separator",
    "originalTitle": "CT系列永磁筒式磁选机",
    "sourceDocument": "选别设备.docx",
    "intro": "CT 系列永磁筒式磁选机根据工作性质的不同 , 有 3 种槽体结构形式 , 即顺流式 (S)、逆流式 (N)、半逆流式 (B)。顺流磁选机适用于大于 6mm 的矿石；逆流式磁选机适用于小于 2 - 3mm 的矿石；半逆流磁选机适用于小于0.3mm 的矿石。在给砂中磁铁矿含量低的情况下 , 即尾矿量大于 50% 时 , 三种槽形磁选机的工艺指标相近;当给矿中磁性铁含量高 , 即尾矿产率小于30%。",
    "advantages": [
      "磁路优化：采用高性能复合磁系，回收率极高，精矿品位好。",
      "槽体灵活：可配三种槽体，精准适配不同粒度和选别工艺。",
      "坚固耐用：重型耐磨结构，适应恶劣工况，运行稳定。",
      "节能易维护：纯永磁驱动，能耗极低，模块化设计便于检修。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/ct-permanent-magnetic-drum-separator-product.png",
      "width": 361,
      "height": 244,
      "alt": "CT permanent magnetic drum separator product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/ct-permanent-magnetic-drum-separator-parameters.png",
      "width": 3072,
      "height": 1840,
      "alt": "CT permanent magnetic drum separator technical parameter table from VICMACH technical document"
    }
  },
  "cyclone-powder-separator": {
    "title": "Cyclone powder separator",
    "originalTitle": "旋风式选粉机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "旋风式选粉机广泛应用于新型干法水泥生产线的磨煤、原料的干磨、水泥磨机系统中。主要用于生料熟料分级，并与球磨机建立闭路粉碎系统。广泛应用于粉体加工、水泥、化工、冶金等行业。",
    "advantages": [
      "创新设计 : 采用新型的组合式设计方法，综合了原有离心式、旋风式、双转子式的优点，大大降低了能耗",
      "高效低能耗 : 物料分多个分类区域进行分类，分布结构独特。选粉效率高达 85% 以上，选粉效果优异。电耗比传统选粉机成本低30%",
      "先进耐用 : 多段尺度板，延长机架使用寿命。结构紧凑，包括风机、调节电机、锁气阀等"
    ],
    "productImage": {
      "src": "/images/equipment-docx/cyclone-powder-separator-product.png",
      "width": 427,
      "height": 305,
      "alt": "Cyclone powder separator product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/cyclone-powder-separator-parameters.png",
      "width": 3300,
      "height": 1216,
      "alt": "Cyclone powder separator technical parameter table from VICMACH technical document"
    }
  },
  "deep-cone-thickener": {
    "title": "Deep cone thickener",
    "originalTitle": "高效深锥浓缩机",
    "sourceDocument": "浓缩脱水.docx",
    "intro": "高效深锥浓缩机主要用于选矿厂矿物的高浓度浓缩，也可以用于其它颗粒细、密度小的料浆的浓缩及废水处理 , 底流浓度最高可达 70%。",
    "advantages": [
      "该款浓缩机设备池高远大于池径，整体呈立式桶锥形；",
      "高效深锥浓缩机由于池体细长，在浓缩过程中又添加絮凝剂，加速 了物料沉降和溢流水澄清的浓缩过程；",
      "全新设计，使底流浓度和溢流水的质量均有较大幅度的提高；",
      "可以真正实现智能化操作",
      "处理能力比传统的浓缩机 , 要高出 3-8 倍 , 底流浓度可达 300- 800 g/L 溢流水的质量能够达到国家排放标准。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/deep-cone-thickener-product.png",
      "width": 199,
      "height": 325,
      "alt": "Deep cone thickener product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/deep-cone-thickener-parameters.png",
      "width": 2360,
      "height": 916,
      "alt": "Deep cone thickener technical parameter table from VICMACH technical document"
    }
  },
  "diaphragm-jig": {
    "title": "Diaphragm jig",
    "originalTitle": "隔膜跳汰机",
    "sourceDocument": "选别设备.docx",
    "intro": "隔膜跳汰机为旁动 ( 上动 ) 型 , 矩形跳汰机 , 其特点是片层比较稳定 , 选别效果比较好，隔膜与传动装置在跳汰室一侧，维修方便。广泛应用金矿选矿厂回收细粒级高品位矿，砂金矿山用于选别粗精矿，在岩金矿选厂配置于磨矿分级回路中提前回收单体粗粒金，特别是在锰矿选矿和细锡矿选矿领域，它不仅用于细物料的分选，而且用于粗物料的分选。最大给矿粒度为 6- 8mm，但在选别砂矿的情况下，最大粒度为 12mm。",
    "advantages": [
      "分选指标高：水流鼓动均匀且动力强，床层稳定，能够一次获得合格精矿或粗精矿。",
      "适应范围广：冲程调节范围大，对粗、中、细粒级矿石均能高效选别，兼具粗选与精选功能。",
      "处理能力强：结构紧凑，单位面积生产率高，尤其适合处理中、细粒级物料，回收率极高。",
      "操作维护简：设备占地面积小，传动与排料结构设计合理，日常操作便捷且易于后期维修。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/diaphragm-jig-product.png",
      "width": 304,
      "height": 358,
      "alt": "Diaphragm jig product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/diaphragm-jig-parameters.png",
      "width": 1261,
      "height": 348,
      "alt": "Diaphragm jig technical parameter table from VICMACH technical document"
    }
  },
  "disc-vacuum-filter": {
    "title": "Disc vacuum filter",
    "originalTitle": "圆盘真空过滤机",
    "sourceDocument": "浓缩脱水.docx",
    "intro": "圆盘真空过滤机适于处理含有矿泥的细粒精矿。主要用于过滤浮选精尾矿以及有色金属精矿等细粒物料的脱水，也可用于冶金、化工、石油、污水处理等方面的固液分离。",
    "advantages": [
      "电磁无级调速电机，摆线针轮减速器，蜗轮传动，操作方便，提高效率，减少噪音，降低能耗；",
      "扇形板为工程塑料制造的格子式，新型扇形板大大提高了使用性能和使用寿命；",
      "占地面积小、制造容易、吸附能力强等。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/disc-vacuum-filter-product.png",
      "width": 344,
      "height": 211,
      "alt": "Disc vacuum filter product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/disc-vacuum-filter-parameters.png",
      "width": 1264,
      "height": 364,
      "alt": "Disc vacuum filter technical parameter table from VICMACH technical document"
    }
  },
  "dry-ball-mill": {
    "title": "Dry ball mill",
    "originalTitle": "干式球磨机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "干式球磨机是一款用于处理干物料的球磨机设备。 应用于选矿、建材、冶金及化工等行业。",
    "advantages": [
      "1、干式球磨机的物料适应能力强 , 可连续生产 , 且便于调节磨粉产品细度 2、出料口处采用直筒状设计 , 并设有引风装置 , 除尘效果好 3、可用于开流磨粉 , 也可用于选粉机组成的循环圈磨粉 4、可根据物料及排矿方式，选择溢流型干式球磨机或格子型干式球磨机 5、干式磨矿后产出物料便是合格物料 6、可根据流程，分成左旋和右旋 7、干式球磨机结构简单，便于维护，其中空轴采用铸钢件，衬件拆换更方便"
    ],
    "productImage": {
      "src": "/images/equipment-docx/dry-ball-mill-product.png",
      "width": 320,
      "height": 262,
      "alt": "Dry ball mill product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/dry-ball-mill-parameters.png",
      "width": 3288,
      "height": 2632,
      "alt": "Dry ball mill technical parameter table from VICMACH technical document"
    }
  },
  "filter-press": {
    "title": "Filter press",
    "originalTitle": "板框压滤机",
    "sourceDocument": "浓缩脱水.docx",
    "intro": "板框压滤机是一种通过高压泵提供压力，在交替排列的滤板和滤框构成的密闭滤室中进行高效固液分离的间歇式设备。工作时，悬浮液被压入滤室，液体透过滤布排出，固体颗粒则被截留堆积形成滤饼。该设备具有过滤推动力大、滤饼含水率低、适应性强及滤液澄清度高等显著优势，广泛应用于化工、环保、矿山、食品及医药等行业的污水处理和物料脱水。",
    "advantages": [
      "压滤机强度高、重量轻、耐腐蚀、耐酸碱、无毒无味。",
      "机架强度高，结构稳定，使用寿命长，占地面积小。",
      "自动拉板，液体自动存取，操作面板简单安全，自动化程度高。",
      "采用液压系统作为动力单元，最大压力 25MPa.",
      "滤饼干燥程度、过滤周期时间、物料组成、室数、滤板尺寸、过滤能力等都是严格要求的。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/filter-press-product.png",
      "width": 290,
      "height": 173,
      "alt": "Filter press product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/filter-press-parameters.png",
      "width": 3024,
      "height": 1600,
      "alt": "Filter press technical parameter table from VICMACH technical document"
    }
  },
  "fine-sand-recovery-machine": {
    "title": "Fine sand recovery machine",
    "originalTitle": "细砂回收机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "细砂回收机是针对矿浆物料脱水、脱泥而开发的设备。通过渣浆泵将浓度 <40% 的泥浆注入水力旋流分离器进行分离，分离出的粗粒部分进入脱水筛脱水回收。最大限度的回收 0.075mm 以上的材料 , 去除 0.075mm以下的污泥和黏土 , 可以与现有生产线上的洗砂机配套使用 , 也可以单独使用 , 提升资源利用率实现收益最大化。",
    "advantages": [
      "该设备具备脱水、细沙回收功能；",
      "旋流器内衬为优质聚氨酯筛板，抗冲击耐磨损；",
      "采用高效节能型振动电机 , 电机与偏心块采用一体化设计，使用及维护更加方便快捷。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/fine-sand-recovery-machine-product.png",
      "width": 390,
      "height": 394,
      "alt": "Fine sand recovery machine product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/fine-sand-recovery-machine-parameters.png",
      "width": 3400,
      "height": 1208,
      "alt": "Fine sand recovery machine technical parameter table from VICMACH technical document"
    }
  },
  "fyb-square-tumbler-screen": {
    "title": "FYB square tumbler screen",
    "originalTitle": "FYB系列方形摇摆筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "FYB 系列方形摇摆筛是一种具有高精度大产重的高效筛分设备 , 通过方型摇摆筛将振动器发生振动加摇摆运动，传至筛面，从而使物料在筛机前部迅速分散，从而达到高效筛分之目的。广泛适用于化工、冶金、有色金属、非有色金属、食品、磨料等行业。",
    "advantages": [
      "设计合理，使用寿命长 设计合理 , 结构简单 , 运行平稳 ; 节能环保 , 使用寿命长 , 筛分精度高 , 操作简单；",
      "高产能运行稳定 独特的网架结构和清网方式 , 有效的延长筛网使用寿命和提升生产精度和产能 振动筛采用专业生产振动筛配件供应商 , 解决您配件更换的后顾之忧 , 运行安 全可靠 , 节约维护成本",
      "精准定位 精准定位 , 专业工程师设计 , 多种样式结合 , 可对颗粒、粉末、浆液类物料进行 有效筛分",
      "种类齐全 种类齐全，单层、多层随意选用，出料口 360°任意旋转，适合连续流水线生产"
    ],
    "productImage": {
      "src": "/images/equipment-docx/fyb-square-tumbler-screen-product.png",
      "width": 491,
      "height": 256,
      "alt": "FYB square tumbler screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/fyb-square-tumbler-screen-parameters.png",
      "width": 727,
      "height": 197,
      "alt": "FYB square tumbler screen technical parameter table from VICMACH technical document"
    }
  },
  "grid-type-ball-mill": {
    "title": "Grid-type ball mill",
    "originalTitle": "格子型球磨机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "格子型球磨机是一款传统的、靠排矿格子强制排矿的球磨机设备。该湿式格子球磨机常用于磨矿粒度较粗的矿石，其筒体可使用高耐磨橡胶衬板，具有良好的耐磨性，使用寿命长，维护方便。",
    "advantages": [
      "顶起装置，便于检修；",
      "静动压轴承，运转平稳可靠",
      "慢速传动 , 便于检修和启动",
      "油雾润滑装置 , 保证大小齿轮润滑可靠",
      "气体离合器柔性启动"
    ],
    "productImage": {
      "src": "/images/equipment-docx/grid-type-ball-mill-product.png",
      "width": 514,
      "height": 500,
      "alt": "Grid-type ball mill product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/grid-type-ball-mill-parameters.png",
      "width": 3240,
      "height": 2316,
      "alt": "Grid-type ball mill technical parameter table from VICMACH technical document"
    }
  },
  "gs-heavy-bar-screen": {
    "title": "GS heavy bar screen",
    "originalTitle": "GS系列重型棒条筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "GS 系列重型棒条振动筛，适用于大冲击负荷工况的高强度直线振动筛，用于剔除初级破碎前不需要通过初级破碎机的细粒级物料减轻初级破碎机负担。是处理爆破原岩、砂砾石和河卵石等细粒级物料含量较高的原料的理想设备。广泛应用于采石场、矿山、建材、电力、煤矿及化工等行业，适用于粗破及二次破碎前的检查筛分。",
    "advantages": [
      "双轴振动器产生的直线轨迹使设备有更高的筛分效率；",
      "最大 4.5G 振动强度，阶梯棒条不容易卡料；",
      "振动参数调整方便，更好的适应不同现场工况；",
      "500mm-1500mm 进料范围，适应大冲击高负荷工况；",
      "通过调整篦条间隙和选装下层筛网，设备可有一个很宽的分 离粒度等级。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/gs-heavy-bar-screen-product.png",
      "width": 351,
      "height": 262,
      "alt": "GS heavy bar screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/gs-heavy-bar-screen-parameters.png",
      "width": 727,
      "height": 191,
      "alt": "GS heavy bar screen technical parameter table from VICMACH technical document"
    }
  },
  "hd-hd-s-heavy-vibrating-screen": {
    "title": "HD / HD-S heavy vibrating screen",
    "originalTitle": "HD/HD-S系列重型振动筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "HD 系列振动筛是在 YK 系列振动筛基础上 , 综合客户现场使用情况及维护经验 , 针对重型工况全新推出的一款新型圆周振动筛产品。技术成熟 , 配件通用性强。其振动强度大、结构强度高 , 且维护简单 , 使用寿命长。适用于重型、中型和精细筛分等各种筛分作业。这种筛分机是处理初级破碎和二级破碎后产物的理想设备 , 也可用于流程中的检查筛分和最终的成品筛分。",
    "advantages": [
      "15°—23°筛面倾角选型区间，可更好的适应现场具体工况；",
      "激振器为偏心轴 + 偏心块结构，传动稳定提供足够激振力；",
      "稀油润滑振动器，半年更换一次润滑油，日常维护省心省力；",
      "关键部位设计了耐磨保护层，磨损后快速更换，延长设备使用寿命；",
      "皮带轮传动，可根据现场工况快速调整设备转速；",
      "采用振动设备专用轴承，寿命更持久，为您的筛分工序保驾护航。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/hd-hd-s-heavy-vibrating-screen-product.png",
      "width": 481,
      "height": 258,
      "alt": "HD / HD-S heavy vibrating screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/hd-hd-s-heavy-vibrating-screen-parameters.png",
      "width": 711,
      "height": 462,
      "alt": "HD / HD-S heavy vibrating screen technical parameter table from VICMACH technical document"
    }
  },
  "high-efficiency-agitation-tank": {
    "title": "High-efficiency agitation tank",
    "originalTitle": "高效搅拌桶",
    "sourceDocument": "配套系统.docx",
    "intro": "高效搅拌桶是选矿、冶金及化工领域专用的核心混合设备。它通过内部导流筒与特制叶轮（如伞型或瓜形叶轮）的配合，使矿浆与药剂在槽内产生强烈的定向循环，彻底消除搅拌死角。相比传统设备，它不仅混合更均匀、反应更充分，还能显著降低能耗，是保障浮选等后续工艺高效运转的关键设备。",
    "advantages": [
      "混合均匀无死角：特制叶轮配合导流筒，形成强烈的定向循环，让药剂与矿浆充分反应。",
      "节能降耗：结构设计优化，搅拌效率高，相比传统设备更省电。",
      "提升工艺指标：混合效果好，能直接提升后续浮选等工序的回收率。",
      "密封性好：结构紧凑，能有效防止水雾反串和杂质进入。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/high-efficiency-agitation-tank-product.png",
      "width": 325,
      "height": 378,
      "alt": "High-efficiency agitation tank product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/high-efficiency-agitation-tank-parameters.png",
      "width": 2456,
      "height": 1192,
      "alt": "High-efficiency agitation tank technical parameter table from VICMACH technical document"
    }
  },
  "high-efficiency-autogenous-mill": {
    "title": "High-efficiency autogenous mill",
    "originalTitle": "高效自磨机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "高效自磨机是—款利用物料本身作为磨矿介质的湿式自磨机。该自磨机一般应用于粗碎后的粗磨作业，可实现二段和三段破碎及筛分、棒磨机或球磨机部分或全部的磨碎功能。",
    "advantages": [
      "能耗低、无粉尘污染、辅助设备少，易实现生产自动化，产品 粒度较稳定等；",
      "可处理粗碎矿石省去中碎、细碎作业 , 粉碎比大 , 达到 3000-4000 ( 给料 300-400 mm, 出料产品 0.1 mm 以下）",
      "具备破碎和粉磨两种功能的新型磨矿设备。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/high-efficiency-autogenous-mill-product.png",
      "width": 345,
      "height": 278,
      "alt": "High-efficiency autogenous mill product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/high-efficiency-autogenous-mill-parameters.png",
      "width": 3320,
      "height": 992,
      "alt": "High-efficiency autogenous mill technical parameter table from VICMACH technical document"
    }
  },
  "high-gradient-magnetic-separator": {
    "title": "High-gradient magnetic separator",
    "originalTitle": "高梯度磁选机：",
    "sourceDocument": "选别设备.docx",
    "intro": "高梯度磁选机适用于氧化铁矿、钛铁矿、赤铁矿、褐铁矿、菱铁矿、钛铁矿、铬铁矿、锰矿、黑钨矿、钽铌矿等弱磁性矿物的采矿工艺； 长石、石英砂、高岭土、霞石、萤石、硅线石、锂辉石、重晶石、红柱石、滑石、锆石、膨润土、菱镁矿等非金属矿物的除铁； 赤泥、冶炼渣、煤气灰、粉煤灰、矿渣等二次资源的回收利用。",
    "advantages": [
      "低电压、大电流、低电流密度。内部水冷和双循环冷却方式磁场稳定。设备运转率高达 98%；",
      "磁系优化设计，磁矩阵优化排列组合，背景场强可达 1.8T。 垂直旋转，反向冲洗实现磁基不易堵塞；",
      "脉 动 机 构 设 计， 提 高 分 离 效 率； 分 离 范 围 宽： 上 限：6mm， 下 限： 2~10μm； 配备盘管管路清洗系统，方便盘管日常维护。设计寿命长达 10 年。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/high-gradient-magnetic-separator-product.png",
      "width": 271,
      "height": 255,
      "alt": "High-gradient magnetic separator product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/high-gradient-magnetic-separator-parameters.png",
      "width": 3416,
      "height": 1224,
      "alt": "High-gradient magnetic separator technical parameter table from VICMACH technical document"
    }
  },
  "hst-single-cylinder-cone-crusher": {
    "title": "HST single-cylinder cone crusher",
    "originalTitle": "HST系列单缸圆锥破碎机",
    "sourceDocument": "破碎筛分.docx",
    "intro": "HST系列圆锥破碎机在吸收世界最先进的技术基础上，融入公司多年的设计经验研发而成，集机械、液压、电气和智能控制及远程控制为一体。相比其它圆锥破碎机生产能力大，能耗低。",
    "advantages": [
      "HST 系列圆锥破碎机具有效率高、粒形好、液压调整、远程自动化控制、可选择多个破碎腔型以及在不更换任何零部件下调整偏心量等高性能的优点。 恒定破碎腔型 : 在整个衬板磨损寿命周期中出料粒度和产能基本保持不变。 正压防尘系统 : 有效防止灰尘等杂物进入设备和油箱内部，避免润滑油污染。 无需填料的衬板安装方式，更换方便无填料结构可减少衬板的更换时间，节约更换费用，提高设备正常运行时间。 智能控制系統人机交互界面易懂易用且高效使操作维护简单，最大化的提高生产率。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/hst-single-cylinder-cone-crusher-product.png",
      "width": 800,
      "height": 800,
      "alt": "HST single-cylinder cone crusher product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/hst-single-cylinder-cone-crusher-parameters.png",
      "width": 724,
      "height": 462,
      "alt": "HST single-cylinder cone crusher technical parameter table from VICMACH technical document"
    }
  },
  "hydraulic-center-drive-high-efficiency-thickener": {
    "title": "Hydraulic center-drive high-efficiency thickener",
    "originalTitle": "液压中心传动高效浓缩机",
    "sourceDocument": "浓缩脱水.docx",
    "intro": "液压中心传动高效浓缩机是一款中心液压马达传动、液压自动提耙的浓密机 , 主要用于矿山矿浆的澄清和浓缩 ,以达到脱水的目的。也可用于化工、冶金等行业进行固液分离的脱水作业。",
    "advantages": [
      "设备处理量大，浓缩效率高；",
      "液压驱动，具有过载保护功能；",
      "由核心 PLC 自动感应压力传感器信号实现液压自动提耙；",
      "传动装置结构简单 , 维修方便",
      "可配自动配药、加药系统"
    ],
    "productImage": {
      "src": "/images/equipment-docx/hydraulic-center-drive-high-efficiency-thickener-product.png",
      "width": 320,
      "height": 279,
      "alt": "Hydraulic center-drive high-efficiency thickener product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/hydraulic-center-drive-high-efficiency-thickener-parameters.png",
      "width": 2920,
      "height": 1344,
      "alt": "Hydraulic center-drive high-efficiency thickener technical parameter table from VICMACH technical document"
    }
  },
  "hydrocyclone": {
    "title": "Hydrocyclone",
    "originalTitle": "水力旋流器",
    "sourceDocument": "磨矿分级.docx",
    "intro": "水力旋流器用于分离和去除粗颗粒的重泥和砂，也可用于浆料的脱水。水力旋流分离器有压力式和重力式两种，由圆柱形结构或金属管组成。浆料沿切线以压力或重力的方式通过结构 ( 或金属管 ) 的顶部进料。",
    "advantages": [
      "该水力旋流器的给料口采用渐开线方向给入物料 , 增大了物料的离心力 , 提高了分级效果也极大的减轻了进料箱的磨损",
      "采用渐开线方式，可以减轻物料进入旋流器时因突然发散而产生的紊流，浆体在旋流器内部的运行平稳，从而提高旋流器的分离性能，减轻物料对给矿箱的冲击磨损；",
      "水力旋流器的柱锥段长度比例及溢流管插入深度合理，分级效 率更高；",
      "用耐磨橡胶做内衬，使用寿命可延长 2-4 倍；结构设计合理，分级指标较高，指标波动较小。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/hydrocyclone-product.png",
      "width": 309,
      "height": 315,
      "alt": "Hydrocyclone product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/hydrocyclone-parameters.png",
      "width": 3220,
      "height": 1280,
      "alt": "Hydrocyclone technical parameter table from VICMACH technical document"
    }
  },
  "kyf-air-inflation-flotation-cell": {
    "title": "KYF air inflation flotation cell",
    "originalTitle": "KYF型充气搅拌式浮选机",
    "sourceDocument": "选别设备.docx",
    "intro": "KYF 型充气搅拌式浮选机是一款不吸浆的充气机械搅拌式浮选机，适用于大、中型选矿厂粗选和精选作业，可选别有色金属、黑色金属和非金属矿物，入选物料粒度范围为 0.3 ～ 0.01mm（-0.074mm 粒级含量＞50%）。",
    "advantages": [
      "浮选机叶轮是一种叶片后倾一个角度的锥形叶轮，搅拌能力强，结构简单",
      "在叶轮腔中装置了多空圆筒形空气分配器，空气分散均匀，气浆结合好",
      "叶轮直径小，圆周速度低，功耗小，可节能 30-50%",
      "矿粒悬浮好，浮选指标高",
      "采用 U 形槽体，尾砂沉积少",
      "易损件磨损轻，寿命长",
      "可与 XCF 型浮选机构成联合浮选机组作直流槽"
    ],
    "productImage": {
      "src": "/images/equipment-docx/kyf-air-inflation-flotation-cell-product.png",
      "width": 369,
      "height": 287,
      "alt": "KYF air inflation flotation cell product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/kyf-air-inflation-flotation-cell-parameters.png",
      "width": 1268,
      "height": 388,
      "alt": "KYF air inflation flotation cell technical parameter table from VICMACH technical document"
    }
  },
  "long-cylinder-ball-mill": {
    "title": "Long-cylinder ball mill",
    "originalTitle": "长筒型球磨机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "长筒型球磨机是一种直径和长度成一定合理比例筒体的磨机 , 通过传动机械使其转动，物料从筒体给料端给入，在筒体内由于钢球及矿石本身的抛落冲击和自磨，物料得以粉碎。由于不断给入物料，其压力促使筒内物料由给料端向排料端移动。达到成品粒度的物料从筒体出料端排出。",
    "advantages": [
      "长筒型球磨机通过多仓分级研磨设计，能够实现多级渐进式粉碎，高效生产超细粉体。",
      "该设备具备强大的处理能力，非常适合水泥、选矿等大型工业的大规模连续生产需求。",
      "它易于构建闭路研磨系统，使粗颗粒返回再磨，从而显著提升产量并优化产品粒度分布。",
      "针对高韧性金属矿、多组分复合材料及湿法敏感物料，它能提供精准的定制化粉磨效果。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/long-cylinder-ball-mill-product.png",
      "width": 351,
      "height": 191,
      "alt": "Long-cylinder ball mill product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/long-cylinder-ball-mill-parameters.png",
      "width": 3120,
      "height": 1968,
      "alt": "Long-cylinder ball mill technical parameter table from VICMACH technical document"
    }
  },
  "overflow-ball-mill": {
    "title": "Overflow ball mill",
    "originalTitle": "溢流型球磨机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "溢流型球磨机是一款结构简单、靠矿浆自流排矿的球磨机。该溢流型球磨机常用于磨矿细度较细的矿石，其筒体可使用高耐磨橡胶衬板 , 具有良好的耐磨性 , 使用寿命长 , 维护方便。",
    "advantages": [
      "顶起装置，便于检修",
      "静动压轴承，运转平稳可靠",
      "慢速传动 , 便于检修和启动",
      "油雾润滑装置 , 保证大小齿轮润滑可靠",
      "气体离合器柔性启动"
    ],
    "productImage": {
      "src": "/images/equipment-docx/overflow-ball-mill-product.png",
      "width": 293,
      "height": 257,
      "alt": "Overflow ball mill product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/overflow-ball-mill-parameters.png",
      "width": 3240,
      "height": 2316,
      "alt": "Overflow ball mill technical parameter table from VICMACH technical document"
    }
  },
  "pcz-x-heavy-hammer-crusher": {
    "title": "PCZ/X heavy hammer crusher",
    "originalTitle": "PCZ/X系列重锤式破碎机",
    "sourceDocument": "破碎筛分.docx",
    "intro": "PCZ 系列重锤式破碎机 , 广泛应用于矿山 , 冶炼 , 建材 , 公路 , 铁路 , 水利和化学工业等众多行业。适用于破碎抗压强度低于 150Mpa 各种中等硬度和脆性物料，如石灰石、青石、煤矸石等。 PCX 系列属于破碎整形一体机，通过可调节活动衬板及物料自流槽设计 , 实现冲击式破碎、反击式整形、自流出料 , 变两级破碎为一级破碎 , 在大型生产线中用作二级破碎整形。",
    "advantages": [
      "大破碎比、短流程、占地少，设备少、维护简单。 PCZ 型重锤式破碎机破碎石料 , 可以一次成型 , 无需二级破碎整形过程 , 降低成本 40% 左右 , 耗能低 , 投资少。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/pcz-x-heavy-hammer-crusher-product.png",
      "width": 266,
      "height": 275,
      "alt": "PCZ/X heavy hammer crusher product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/pcz-x-heavy-hammer-crusher-parameters.png",
      "width": 724,
      "height": 348,
      "alt": "PCZ/X heavy hammer crusher technical parameter table from VICMACH technical document"
    }
  },
  "peripheral-drive-thickener": {
    "title": "Peripheral drive thickener",
    "originalTitle": "周边传动式浓缩机",
    "sourceDocument": "浓缩脱水.docx",
    "intro": "周边传动式浓缩机分为周边辊轮传动和周边齿条传动两种形式。主要用于选矿过程中湿选、精选的脱水处理 ,作为第一阶段的浓缩脱水使用。一般设置于精选与过滤设备之间 , 有时也用做精选前的脱水 , 同时也可在化工业用来进行脱水作业。",
    "advantages": [
      "采用了独特的桥架设计 , 刚性强度好 , 过载能力强",
      "传统型，安全系数高，稳定性高；",
      "周边驱动 , 能耗低 , 运行平稳可靠",
      "操作简单，维护方便 , 可实现远程控制。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/peripheral-drive-thickener-product.png",
      "width": 360,
      "height": 202,
      "alt": "Peripheral drive thickener product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/peripheral-drive-thickener-parameters.png",
      "width": 2864,
      "height": 1640,
      "alt": "Peripheral drive thickener technical parameter table from VICMACH technical document"
    }
  },
  "permanent-magnetic-pulley": {
    "title": "Permanent magnetic pulley",
    "originalTitle": "永磁滚筒",
    "sourceDocument": "选别设备.docx",
    "intro": "永磁滚筒又称磁滚筒，是磁铁矿矿石的磁性设备，主要用于预选前细破碎或磨矿中，以去除脉石、死粒和尾矿，尾矿出率约为 10%。入选粒度 300mm 以下。通常可以适量抛尾，提高入磨品位至地质品位以上。",
    "advantages": [
      "大磁包角设计，磁包角 <180°，增加分选带长度和磁翻转次数，实现磁性矿物和非（弱）磁 性矿物的有效分离；",
      "滚筒的磁系全部采用高磁能积、高矫顽力的钕铁硼磁铁，磁场强度高，作用深度大；",
      "磁场强度 8 年退磁率不超过 5%",
      "磁系包贴不导磁不锈钢，确保磁铁不脱落；",
      "筒体采用不导磁不锈钢并包贴耐磨橡胶，筒体的使用寿命显著提高；",
      "永磁滚筒既可以做主动滚筒，也可以做从动滚筒"
    ],
    "productImage": {
      "src": "/images/equipment-docx/permanent-magnetic-pulley-product.png",
      "width": 303,
      "height": 168,
      "alt": "Permanent magnetic pulley product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/permanent-magnetic-pulley-parameters.png",
      "width": 3000,
      "height": 848,
      "alt": "Permanent magnetic pulley technical parameter table from VICMACH technical document"
    }
  },
  "pf-impact-crusher": {
    "title": "PF impact crusher",
    "originalTitle": "PF系列反击式破碎机",
    "sourceDocument": "破碎筛分.docx",
    "intro": "PF 反击式破碎机是本公司在吸收国内外先进技术，结合国内砂石行业工况研发的一款高效反击式破碎机。独特的结构设计，先进的制造工艺，广泛应用于铁路、高速公路、能源、建材、化工等行业中的中等硬度以下低磨蚀物料的破碎。",
    "advantages": [
      "高效节能：进料口大、破碎腔高、适应物料硬度高、粒度大、产品石粉少。",
      "结构独特：结构紧凑、机器刚性强、转子具有大的转动惯量。",
      "产品粒形好：反击破与板锤间隙能方便调节，有效的控制出料粒度，颗粒形状好。",
      "综合效益高：高铭板锤，抗冲击、抗磨损、冲击力大"
    ],
    "productImage": {
      "src": "/images/equipment-docx/pf-impact-crusher-product.png",
      "width": 298,
      "height": 318,
      "alt": "PF impact crusher product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/pf-impact-crusher-parameters.png",
      "width": 688,
      "height": 184,
      "alt": "PF impact crusher technical parameter table from VICMACH technical document"
    }
  },
  "reagent-agitation-tank": {
    "title": "Reagent agitation tank",
    "originalTitle": "药剂搅拌桶",
    "sourceDocument": "配套系统.docx",
    "intro": "药剂搅拌桶是选矿、化工及水处理等行业中，用于浮选前或反应前将药剂与矿浆（或液体）充分混合调配的关键设备。其核心作用是通过强烈的机械搅拌，增加药剂与物料的反应时间，强化反应质量，并确保固相均匀悬浮不沉淀。",
    "advantages": [
      "混合均匀：搅拌强烈，确保药剂与物料充分接触，无死角，防沉淀。",
      "结构紧凑：密封性好，进料口常设挡灰板防反串，有效改善工作环境。",
      "调节灵活：部分设备配有水量调节喷嘴，可根据工艺需求精准控制混合状态。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/reagent-agitation-tank-product.png",
      "width": 232,
      "height": 293,
      "alt": "Reagent agitation tank product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/reagent-agitation-tank-parameters.png",
      "width": 2416,
      "height": 1072,
      "alt": "Reagent agitation tank technical parameter table from VICMACH technical document"
    }
  },
  "rod-mill": {
    "title": "Rod mill",
    "originalTitle": "棒磨机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "棒磨机主要用于长石 , 石英和鹅卵石等矿石材料的加工和破碎。钢棒随磨机旋转 , 在摩擦力和离心力的作用下上升到一定的高度并被抛下，使物料持续受到撞击形成制砂。",
    "advantages": [
      "节省动力，比传统设备节省动力 40% 以上，减少成本开支；",
      "制砂过程中 , 中砂比例含量高 , 级配连续性好",
      "采用线接触碰撞，已被粉碎的物料不会被二次粉碎，不会过粉碎。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/rod-mill-product.png",
      "width": 351,
      "height": 217,
      "alt": "Rod mill product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/rod-mill-parameters.png",
      "width": 3440,
      "height": 1856,
      "alt": "Rod mill technical parameter table from VICMACH technical document"
    }
  },
  "rotary-ore-washer": {
    "title": "Rotary ore washer",
    "originalTitle": "滚筒洗矿机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "滚筒洗矿机滚筒洗矿机广泛适用于铁、锰、石灰石、锡矿等含泥量较多的矿石选矿前清洗泥沙，可以对矿物的搅拌、冲洗、分离、脱泥等各种难洗的大块矿石，洗矿效率可达 98% 左右。它利用旋转筒体内部的耐磨衬板将物料不断带起抛落，配合顺向或逆向的高压水流冲刷，通过物料间的相互摩擦与碰撞，有效将有用矿物从黏土中解离并分离。",
    "advantages": [
      "洗净度高，适应性强：采用强烈的机械摩擦与水力冲刷双重作用，对泥包石、干泥夹石的解离能力极强，洗矿效率可达98%以上，且允许进料粒度大（最高可达300mm）。",
      "运行可靠，维护成本低：核心洗石系统采用搅拌机原理，作用强烈且连续；设备整体结构坚固，几乎无高频易损件，长期运行故障率低，维修方便。",
      "高度集成，转场便捷：除成品皮带机外，所有系统集成于一个整体框架内，结构紧凑，便于施工现场存放或拆装转场运输，且可配套废水循环系统，经济环保。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/rotary-ore-washer-product.png",
      "width": 393,
      "height": 172,
      "alt": "Rotary ore washer product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/rotary-ore-washer-parameters.png",
      "width": 3272,
      "height": 672,
      "alt": "Rotary ore washer technical parameter table from VICMACH technical document"
    }
  },
  "rx-series-ore-washer": {
    "title": "RX series ore washer",
    "originalTitle": "RX系列洗矿机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "RX系列洗矿机双轴洗矿机是选矿工艺执行前，专门用于含泥矿石清洗脱泥的大型设备。它利用旋转圆筒或螺旋轴的翻滚、搓洗以及水流冲刷作用，有效将有用矿物从粘土、泥性土壤中分离出来，避免泥质物堵塞后续粉碎和筛分设备，广泛应用于锰矿、铁矿、砂金、砂锡等矿石的洗选作业。",
    "advantages": [
      "叶片由高铬铸铁制成，具有优异的耐磨性能；",
      "大直径轴设计确保最小的偏转和平稳运行；",
      "桨叶螺旋设计，使工作负荷均匀分布在轴、壳体和传动系上，显著提高使用寿命；",
      "外壳的侧板由全长压板制成，没有焊接接头，最大限度地延长了设备使用寿命；",
      "轴同步，通过单定时齿轮设计，保证最大的磨损性能和效率。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/rx-series-ore-washer-product.png",
      "width": 412,
      "height": 168,
      "alt": "RX series ore washer product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/rx-series-ore-washer-parameters.png",
      "width": 1265,
      "height": 379,
      "alt": "RX series ore washer technical parameter table from VICMACH technical document"
    }
  },
  "sand-washing-dewatering-and-recovery-unit": {
    "title": "Sand washing, dewatering and recovery unit",
    "originalTitle": "洗砂脱水回收一体机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "洗砂脱水回收一体机（又称三合一洗砂机）是集洗砂、脱水、细砂回收三大功能于一体的新型环保洗砂设备。它巧妙地将传统轮式洗砂机与细砂回收系统对接，通过叶轮清洗、高压喷淋、旋流器分级浓缩及振动筛脱水等多重工序，将砂水混合物中的泥沙分离，广泛应用于机制砂、天然砂及尾矿处理生产线。",
    "advantages": [
      "洗砂脱水回收一体机具有洗砂、脱水和回收功能。一机多用，操作方便，节省投资成本和占地面积；",
      "洗砂更干净，对洗砂机的成品砂增加了二次洗砂脱水功能；",
      "提高成品砂的质量和产量，充分解决洗砂机存在的问题 ( 如 : 成品含水量大、泥量大、粉尘多、杂质难以清洗等 )"
    ],
    "productImage": {
      "src": "/images/equipment-docx/sand-washing-dewatering-and-recovery-unit-product.png",
      "width": 509,
      "height": 390,
      "alt": "Sand washing, dewatering and recovery unit product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/sand-washing-dewatering-and-recovery-unit-parameters.png",
      "width": 3696,
      "height": 2176,
      "alt": "Sand washing, dewatering and recovery unit technical parameter table from VICMACH technical document"
    }
  },
  "sawtooth-wave-jig": {
    "title": "Sawtooth wave jig",
    "originalTitle": "锯齿波跳汰机",
    "sourceDocument": "选别设备.docx",
    "intro": "JT 型锯齿波跳汰机是一种新型的跳汰机是现代重选设备之一，目前已形成系列推广使用。这种跳汰机采用电磁无级调速，鼓动均匀，矿流平稳，对宽别入选物料适应性强，对中细粒选别效果好，且省水，由于其处理能力大，选别粒度范围广 , 操作维护简单 , 主要于选别砂金、钨矿、锡矿、赤铁矿和海滨砂矿。",
    "advantages": [
      "处理能力大，选别粒度范围广",
      "高富集比和高回收率",
      "易安装，易操作，易维护",
      "锯齿波跳汰脉动曲线使重矿物更容易下沉",
      "比传统跳汰机省水 30-40%",
      "适用于选别砂金、锡、钛、赤铁、铁矿、煤等矿物，特别是在锰矿、重晶石选矿领域中得到了广泛应用"
    ],
    "productImage": {
      "src": "/images/equipment-docx/sawtooth-wave-jig-product.png",
      "width": 391,
      "height": 356,
      "alt": "Sawtooth wave jig product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/sawtooth-wave-jig-parameters.png",
      "width": 1264,
      "height": 436,
      "alt": "Sawtooth wave jig technical parameter table from VICMACH technical document"
    }
  },
  "scrubber": {
    "title": "Scrubber",
    "originalTitle": "擦洗机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "擦洗机 / 硅砂擦洗机是我公司根据生产实践设计制造的机械设备。用于对浓度为 68~70% 的矿浆进行洗选，对矿石上的泥砂进行洗选，为选矿作业创造条件。也适用于其他清洗行业。",
    "advantages": [
      "结构简单，体积大，占地面积小。外设速度低，使用寿命长。功率消耗小，洗涤搅拌强 度强，效果好。",
      "叶轮位于“矿浆沉淀区”上方，启动方便，启动功率低，可降低操作人员的劳动强度。",
      "双槽洗涤机的进料、出料及电机的相对位置可根据用户需要在不同位置制造。",
      "由于叶轮位于矿浆沉降带上方，起动轻，起动功率小，大大降低了操作人员的工作强度。",
      "擦洗强度大，效果好。独特的罐体结构和叶轮配置，使洗涤强度比同等规格的常规洗涤 器提高 30% 左右。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/scrubber-product.png",
      "width": 428,
      "height": 401,
      "alt": "Scrubber product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/scrubber-parameters.png",
      "width": 3760,
      "height": 1264,
      "alt": "Scrubber technical parameter table from VICMACH technical document"
    }
  },
  "sf-mechanical-agitation-flotation-cell": {
    "title": "SF mechanical agitation flotation cell",
    "originalTitle": "SF型机械搅拌浮选机",
    "sourceDocument": "选别设备.docx",
    "intro": "SF 型机械搅拌式浮选机是一款自吸浆、自吸气的矿用浮选机，可广泛用于有色金属、黑色金属、和非金属矿物的选别，适合于大、中型浮选厂的粗选和扫选作业。浮选机的叶轮两面带有后倾式叶片，可实现槽内矿浆双循环。",
    "advantages": [
      "叶轮带有后倾式双面叶片，可实现槽内矿浆双循环；",
      "叶轮与盖板间隙较大，吸气量大；",
      "前倾式槽体，死角小，泡沫运动速度快；",
      "吸气量大，能耗小；",
      "易损件寿命长；",
      "有利于粗粒矿物浮选"
    ],
    "productImage": {
      "src": "/images/equipment-docx/sf-mechanical-agitation-flotation-cell-product.png",
      "width": 1268,
      "height": 816,
      "alt": "SF mechanical agitation flotation cell product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/sf-mechanical-agitation-flotation-cell-parameters.png",
      "width": 1262,
      "height": 389,
      "alt": "SF mechanical agitation flotation cell technical parameter table from VICMACH technical document"
    }
  },
  "shaking-table": {
    "title": "Shaking table",
    "originalTitle": "摇床",
    "sourceDocument": "选别设备.docx",
    "intro": "选矿摇床是重力选矿的主要设备之一，它广泛应用于选别钨、锡、钽、铌金和其他稀有金属和贵金属 , 可用于粗选 , 精选 , 扫选等不同作业 , 选别粗砂 (2-0.5mm), 细砂 (10.5-0.074mm), 矿泥 (-0.074) 等不同粒级 . 也可用于选别铁、锰矿石和煤。当处理钨、锡等矿石时 , 摇床的有效回收粒度范围 2-0.22 毫米 , 摇床具有富矿比高 , 选别效率高 , 看管容易 , 便于调节冲程 , 在改变横向坡度和冲程时仍可保持床面运行平衡 , 弹簧放置体内 ,结构紧凑且能依次得出最终精矿和最终尾矿。",
    "advantages": [
      "选矿的富集比高",
      "经过一次选别就可以得到最终精矿和废弃尾矿",
      "矿物在床面上的分带明显，所以观察、调节、接取都比较方便",
      "玻璃钢床面，七种不同床面可供选择"
    ],
    "productImage": {
      "src": "/images/equipment-docx/shaking-table-product.png",
      "width": 296,
      "height": 209,
      "alt": "Shaking table product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/shaking-table-parameters.png",
      "width": 3192,
      "height": 1040,
      "alt": "Shaking table technical parameter table from VICMACH technical document"
    }
  },
  "slurry-lifting-agitation-tank": {
    "title": "Slurry lifting agitation tank",
    "originalTitle": "矿浆提升搅拌桶",
    "sourceDocument": "配套系统.docx",
    "intro": "在设备配置上造成矿浆高差不足，或相差较小不宜泵送时可选用矿浆提升搅拌槽。通过离心叶轮的高速旋转将叶轮中心产生负压，通过叶轮底部的筒座将外部矿浆吸入槽内 ,并使槽内液面不断升高 , 到一定高度后沿溢流管流出 , 从而达到了提升能力。",
    "advantages": [
      "弥补高差，替代砂泵：当设备配置造成矿浆自流高度差不足，或高差太小不宜用泵输送时，它能利用叶轮离心力将矿浆提升一定高度，完美解决工艺流程中的标高衔接问题。",
      "搅拌提升一体化：在提升矿浆液面的同时，使固相充分悬浮，确保矿浆与浮选药剂均匀混合，强化反应质量，为后续浮选作业提供良好条件。",
      "密封防尘，无死角设计：结构紧凑且密封性好，进料口设有挡灰板防止水雾反串；底部设有分水岭结构，确保槽内无死角、剩灰率低，出料迅速。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/slurry-lifting-agitation-tank-product.png",
      "width": 265,
      "height": 400,
      "alt": "Slurry lifting agitation tank product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/slurry-lifting-agitation-tank-parameters.png",
      "width": 2808,
      "height": 744,
      "alt": "Slurry lifting agitation tank technical parameter table from VICMACH technical document"
    }
  },
  "spiral-chute": {
    "title": "Spiral chute",
    "originalTitle": "螺旋溜槽",
    "sourceDocument": "选别设备.docx",
    "intro": "螺旋溜槽是具有国内先进水平的高效重选新设备。用干选别粒度 0.3-0.02 mm 细粒的铁、锡、钨、钽、铌金矿、煤矿、独居石、金红石、锆英石以及具有足够比重差的其它金属、非金属矿物。",
    "advantages": [
      "高效率，高回收率，分矿准确",
      "无需动力",
      "重量轻，防锈，耐磨，耐腐蚀",
      "低操作成本，使用寿命长",
      "对给矿量，浓度，粒度，品位的波动适应性强",
      "金刚砂表面形成的摩擦力使选矿效果优于其他塑料表面"
    ],
    "productImage": {
      "src": "/images/equipment-docx/spiral-chute-product.png",
      "width": 272,
      "height": 336,
      "alt": "Spiral chute product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/spiral-chute-parameters.png",
      "width": 3208,
      "height": 976,
      "alt": "Spiral chute technical parameter table from VICMACH technical document"
    }
  },
  "spiral-classifier": {
    "title": "Spiral classifier",
    "originalTitle": "螺旋分级机",
    "sourceDocument": "磨矿分级.docx",
    "intro": "螺旋分级机借助固体颗粒的比重不同，因而在液体中沉淀的速度不同的原理，进行机械分级的一种设备。能把磨机内磨出的料粉级于过滤，然后把粗料利用螺旋片旋片旋入磨机进料口，把过滤出的细料从溢流管子排出。螺旋分级机简称分级机。 螺旋分级机根据螺旋数量可分为单螺旋分级机和双螺旋分级机两种，根据螺旋叶片浸入溢流面深浅程度可分为高堰式螺旋分级机和沉没式螺旋分级机两种。",
    "advantages": [
      "1、该分级机采用密封浸没式轴承。 2、转载动力强劲的独立式提升设备。 3、螺栓安装式耐磨衬板，可延长磨耗寿命。 4、长窄型槽体，可使搅动效果理想，延长物料在水中悬浮时间。 5、足够大的沉降区域延长物料悬浮时间，更有利于物料分级。 6、合适的浆池深度、面积和螺旋构造组合实现对分级力度很好的控制。 7、该分级机可根据实际需要选择单螺旋和双螺旋，同时槽体设计选择范围广。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/spiral-classifier-product.png",
      "width": 298,
      "height": 295,
      "alt": "Spiral classifier product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/spiral-classifier-parameters.png",
      "width": 1269,
      "height": 929,
      "alt": "Spiral classifier technical parameter table from VICMACH technical document"
    }
  },
  "spiral-sand-washer": {
    "title": "Spiral sand washer",
    "originalTitle": "螺旋式洗砂机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "螺旋式洗砂机（XS 系列洗砂机）适用于冶金、建材、水电等行业的洗选、分级、除杂等作业。该洗砂机系列中的轻型洗砂机适用于细粒度物料的洗选作业，重型洗砂机适用于粗粒度物料的洗选作业。",
    "advantages": [
      "整体结构设计合理，运行稳定，维修方便，清洁度高；",
      "洗砂机的优化排水沟槽，保证最大限度地去除物料中的水分；",
      "导料板和可调式长溢流堰板，配合经过优化的螺旋速度，确保物料洗选、分级的精度；",
      "洗砂机的螺旋叶片采用抗磨材料制成，保证了设备工作的连续性，降低了使用成本；",
      "采用了新型的外置密封结构和全封闭传动结构，少情况下需要维修，大限度的降低了设备维修工作量和保养成本。",
      "使用该洗砂机所洗物料流失少、洗选效率高，可完全满足高等级用料的要求。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/spiral-sand-washer-product.png",
      "width": 404,
      "height": 198,
      "alt": "Spiral sand washer product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/spiral-sand-washer-parameters.png",
      "width": 602,
      "height": 124,
      "alt": "Spiral sand washer technical parameter table from VICMACH technical document"
    }
  },
  "standard-agitation-tank": {
    "title": "Standard agitation tank",
    "originalTitle": "普通搅拌桶",
    "sourceDocument": "配套系统.docx",
    "intro": "普通搅拌桶是选矿工艺中用于浮选前矿浆与药剂混合的基础设备。其结构简单、造价低廉、运行平稳且能耗低，能有效防止矿浆沉淀，确保药剂调和均匀，是常规选矿流程中最经济实用的搅拌设备。",
    "advantages": [
      "简单省钱：结构基础，造价低，日常维护极其便宜。",
      "搅拌防沉：让矿浆悬浮不沉淀，与药剂混合均匀。",
      "省电耐用：运行平稳，能耗低，故障率极低。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/standard-agitation-tank-product.png",
      "width": 208,
      "height": 278,
      "alt": "Standard agitation tank product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/standard-agitation-tank-parameters.png",
      "width": 2416,
      "height": 1072,
      "alt": "Standard agitation tank technical parameter table from VICMACH technical document"
    }
  },
  "trommel-screen": {
    "title": "Trommel screen",
    "originalTitle": "滚筒筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "滚筒筛，是一种具有强大的搅拌、清洗和筛分功能的新型多用途水洗设备",
    "advantages": [
      "1、筛孔不易堵塞； 2、运行平稳，噪声较低 3、结构简单，维修方便； 4、筛分筒可封闭，易于密闭收尘； 5、整机可靠性高，一次性投资较少 6、采用特质筛网，筛分效率高，使用寿命长。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/trommel-screen-product.png",
      "width": 600,
      "height": 400,
      "alt": "Trommel screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/trommel-screen-parameters.png",
      "width": 726,
      "height": 207,
      "alt": "Trommel screen technical parameter table from VICMACH technical document"
    }
  },
  "ts-high-frequency-dewatering-screen": {
    "title": "TS high-frequency dewatering screen",
    "originalTitle": "TS高频脱水筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "TS 系列高频脱水筛采用双电机或激振器自动同步技术，通用型偏心块，可调振幅振动器 , 通过两个互不联系的振动器件同步反向运转，向筛机提供的激振力，使物料在筛面上直线跳跃运动，以达到对物料的脱水、分级、脱介、脱泥的目的。",
    "advantages": [
      "采用优质聚氨酯筛板，抗冲击耐磨损；",
      "振动电机更换方便；",
      "机身采用Q345R钢材，由高精激光机切割而成，韧性好，强度高；",
      "采用橡胶高弹力弹簧，使用寿命长，减震效果好。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/ts-high-frequency-dewatering-screen-product.png",
      "width": 363,
      "height": 375,
      "alt": "TS high-frequency dewatering screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/ts-high-frequency-dewatering-screen-parameters.png",
      "width": 728,
      "height": 186,
      "alt": "TS high-frequency dewatering screen technical parameter table from VICMACH technical document"
    }
  },
  "vhs-three-axis-elliptical-screen": {
    "title": "VHS three-axis elliptical screen",
    "originalTitle": "VHS系列三轴椭圆筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "VHS 系列三轴椭圆振动筛 , 是在圆振筛和直线筛基础上 , 整合二者优势设计研发的一款筛分设备。其运动轨迹呈椭圆状 , 防堵、筛分精度高 ,适用于对物料精度要求较高的筛分工序。",
    "advantages": [
      "椭圆行的振动轨迹，整合了圆振筛和直线筛振动轨迹的优点；",
      "三轴振动器用铬镍合金齿轮联动，外置偏心块调整方便；",
      "最大 6.0G 振动强度，带来更佳的筛分效果，防止网孔堵塞；",
      "水平安装 , 适用于安装高度受限的应用现场。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/vhs-three-axis-elliptical-screen-product.png",
      "width": 404,
      "height": 202,
      "alt": "VHS three-axis elliptical screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/vhs-three-axis-elliptical-screen-parameters.png",
      "width": 710,
      "height": 163,
      "alt": "VHS three-axis elliptical screen technical parameter table from VICMACH technical document"
    }
  },
  "vsi-sand-maker": {
    "title": "VSI sand maker",
    "originalTitle": "VSI系列制砂机",
    "sourceDocument": "破碎筛分.docx",
    "intro": "VSI 系列制砂机是本公司引进德国先进技术的基础上，结合国内制砂生产方面的实际情况，经历数次技术改进之后研制出的具有国内、国际领先水平的高效制砂设备。该设备尤其适宜为高层建筑、高速公路 ( 铁路 ) 建设、市政工程、大型水利设施、混凝土搅拌站等诸多领域提供优质砂石骨料。",
    "advantages": [
      "成砂粒形好 采用“石打石”或“石打铁”破碎方式，成品颗粒形状更好，级配更合理。 破碎效率高 适合中细碎和制砂作业，可处理多种硬度物料，出料稳定。 适用范围广 可用于机制砂、砂石骨料、矿石细碎、建筑用砂等生产场景。 成品可控 可根据生产需求调整出料粒度，满足不同砂石规格要求。 耐磨性强 关键易损件采用耐磨材料，适合高强度连续生产。 整线适配性好 可与给料机、振动筛、洗砂机、输送机等设备组成完整制砂生产线"
    ],
    "productImage": {
      "src": "/images/equipment-docx/vsi-sand-maker-product.png",
      "width": 411,
      "height": 385,
      "alt": "VSI sand maker product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/vsi-sand-maker-parameters.png",
      "width": 700,
      "height": 213,
      "alt": "VSI sand maker technical parameter table from VICMACH technical document"
    }
  },
  "wheel-sand-washer": {
    "title": "Wheel sand washer",
    "originalTitle": "轮式洗砂机",
    "sourceDocument": "湿法清洗.docx",
    "intro": "轮式洗砂机是本公司专为生产高等级砂石而研制的洗砂机械。它具有洗净度高 , 结构合理 , 产量大 , 洗砂过程中砂子流失少 , 尤其是传动部分均与水、砂隔离 , 使其故障率大大降低。适用于砂石厂，建筑工地，水电站大坝，玻璃制造业，油井开发业等用砂单位。",
    "advantages": [
      "1、结构简单合理，有效减少占地面积。 2、轴承与水、砂的隔离设计有效避免了轴承因进水、砂和污染物导致损坏的现象发生，减少故障率。 3、传动部的优化设计，便于用户现场安装。 4、专业设计的导料板，有利于物料的挖取及排出；合理的筛网设计配合经过优化设计的斗轮转速确保物料中的水分及杂质最大限度的排出。 5、细砂和石粉流失极少，所洗建筑砂级配和细度模数达到标准要求。 6、合理的排料溜槽及排水口的设计有利于物料及水的排出。 7、轮斗式洗砂机除筛网外几乎无易损件，使用寿命长，长期不用维修。 8、处理量大，功率消耗少，节省水资源，无污染，绿色环保。"
    ],
    "productImage": {
      "src": "/images/equipment-docx/wheel-sand-washer-product.png",
      "width": 351,
      "height": 323,
      "alt": "Wheel sand washer product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/wheel-sand-washer-parameters.png",
      "width": 3592,
      "height": 960,
      "alt": "Wheel sand washer technical parameter table from VICMACH technical document"
    }
  },
  "xcf-air-inflation-flotation-cell": {
    "title": "XCF air inflation flotation cell",
    "originalTitle": "XCF型充气搅拌型浮选机",
    "sourceDocument": "选别设备.docx",
    "intro": "XCF 型充气搅拌式浮选机是一款自吸浆的充气机械搅拌式浮选机，可广泛用于有色金属、黑色金属、和非金属矿物的选别，适合于大、中型浮选厂的粗选和扫选作业。",
    "advantages": [
      "该浮选设备结构简单，搅拌能力强",
      "空气分散均匀，气浆结合好",
      "尾砂沉积少，圆周速度低，功耗小",
      "可与 KYF 型浮选机构成联合浮选机组作吸入槽",
      "该机结构特点与性能与 KYF 型浮选机相似，不同的是在叶轮的上方特别设 有一个定子，以形成一个特别的负压区，自吸矿浆",
      "在浮选过程中，合理的使用浮选药剂，能更有效的分选出有用的矿物与脉 石矿物"
    ],
    "productImage": {
      "src": "/images/equipment-docx/xcf-air-inflation-flotation-cell-product.png",
      "width": 265,
      "height": 227,
      "alt": "XCF air inflation flotation cell product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/xcf-air-inflation-flotation-cell-parameters.png",
      "width": 1268,
      "height": 388,
      "alt": "XCF air inflation flotation cell technical parameter table from VICMACH technical document"
    }
  },
  "yk-vibrating-screen": {
    "title": "YK vibrating screen",
    "originalTitle": "YK系列振动筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "YK 系列振动筛做圆形运动 , 主要用于砂石场骨料筛分，也可供选煤、选矿、建材、电力及化工部门等作产品分级用 , 该机采用块偏心激振器，电机通过挠性联轴器直连驱动，具有结构先进，激振力强，振动噪音小，易于维修，坚固耐用等特点。",
    "advantages": [
      "筛分效率高，出料分级干净，产能更大",
      "机身抗振不易开裂，稀油激振器耐用，可长时间连续干活",
      "运行平稳噪音小，故障率低",
      "检修换筛网省事，后期维护省钱",
      "干湿物料都能用，适配各类砂石生产线"
    ],
    "productImage": {
      "src": "/images/equipment-docx/yk-vibrating-screen-product.png",
      "width": 432,
      "height": 359,
      "alt": "YK vibrating screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/yk-vibrating-screen-parameters.png",
      "width": 754,
      "height": 385,
      "alt": "YK vibrating screen technical parameter table from VICMACH technical document"
    }
  },
  "zsg-heavy-linear-screen": {
    "title": "ZSG heavy linear screen",
    "originalTitle": "ZSG系列重型直线筛",
    "sourceDocument": "破碎筛分.docx",
    "intro": "ZSG 重型直线振动筛是一种新型的通用筛分设备，其筛箱运动轨迹近似为直线。直线振动筛筛机结构简单 , 筛分能力大且能耗少、维修简便，广泛应用于矿山、煤炭、电力、冶金、建材、耐火等各行各业对较大块状物料及中、小颗粒状物料的分级作业。",
    "advantages": [
      "动力装置有振动电机直接驱动和普通电机通过联轴器带动激振器间接驱动两种形 式，可满足不同生产环境需要",
      "筛面有金属编织网、棒条、冲孔等多种形式，筛面既有单层结构也可多层布置， 满足不同筛分作业要求",
      "结构简单易操作，外型美观，整机刚度与各部强度大，相对能耗少，筛分效率高",
      "相对体积小、重量轻，单位设备体积和重量处理能力大，便于系统工艺布置",
      "筛面结构与类型模块化设计 , 更换方便 , 可满足不同环境作业需要"
    ],
    "productImage": {
      "src": "/images/equipment-docx/zsg-heavy-linear-screen-product.png",
      "width": 358,
      "height": 233,
      "alt": "ZSG heavy linear screen product image from VICMACH technical document"
    },
    "parameterImage": {
      "src": "/images/equipment-docx/zsg-heavy-linear-screen-parameters.png",
      "width": 794,
      "height": 236,
      "alt": "ZSG heavy linear screen technical parameter table from VICMACH technical document"
    }
  }
};

export function getEquipmentDocxDetail(slug: string): EquipmentDocxDetail | undefined {
  return equipmentDocxDetails[slug];
}
