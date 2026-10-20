// 2027 岡山進・關西出 9天8夜親子之旅 (6/26 ~ 7/4) 核心資料與互動邏輯

const STORAGE_KEY = "okayama_kansai_2027_v1";

const defaultTripData = {
  selectedDay: 1,
  activeTab: "itinerary", // itinerary | pass | flightHotel | checklist
  day7Option: "A", // A: 海遊館 | B: Kids Plaza
  hotelNames: {
    okayama: "岡山車站周邊飯店（待填寫飯店名稱與訂房代號）",
    osaka: "大阪新今宮周邊飯店（待填寫飯店名稱與訂房代號）"
  },
  days: [
    {
      day: 1,
      date: "6/26 (六)",
      fullDate: "2027-06-26",
      city: "岡山",
      title: "航班抵達與市區採買",
      passBadge: "🚌 機場利木津巴士（現場購票/刷卡）",
      passType: "bus",
      transportSummary: "自岡山機場搭乘利木津巴士直達 JR 岡山車站（約 30 分鐘，現場購票或刷卡）。",
      hotelArea: "岡山車站周邊 (第 1/3 晚)",
      notes: "抵達 JR 岡山站後，建議先在綠色窗口兌換隔天要用的「JR 關西廣域周遊券」及領取 Day 3 麵包超人小火車指定席券！",
      items: [
        {
          id: "d1-1",
          time: "下午",
          category: "✈️ 航班抵達",
          title: "搭乘台灣虎航 IT 214 抵達岡山桃太郎機場",
          desc: "辦理入境手續、領取行李。岡山機場規模小巧，通關動線單純，出關後左手邊即可搭乘接駁巴士。",
          highlight: "💡 記得提前填妥 Visit Japan Web (VJW) 加速全家人通關！",
          mapQuery: "Okayama Momotaro Airport",
          done: false
        },
        {
          id: "d1-2",
          time: "傍晚",
          category: "🚌 機場交通",
          title: "搭乘利木津巴士直達 JR 岡山車站",
          desc: "巴士配合航班時間發車，直達岡山站西口巴士中心。抵達後先前往岡山車站周邊飯店辦理 Check-in 放行李。",
          highlight: "🎫 現場售票機購票或直接感應交通卡/信用卡",
          mapQuery: "JR Okayama Station",
          done: false
        },
        {
          id: "d1-3",
          time: "晚上",
          category: "🛍️ 用餐與採買",
          title: "岡山車站共構商場 / AEON MALL 岡山",
          desc: "於車站地下街一番街或連通道直達的 AEON MALL 岡山享用晚餐，順便採買未來幾天的兒童零食、水果（岡山白桃季初登場！）與日用品。",
          highlight: "🍑 AEON 1樓超市與 6-7樓餐廳街選擇非常豐富，推車友善！",
          mapQuery: "AEON MALL Okayama",
          done: false
        }
      ]
    },
    {
      day: 2,
      date: "6/27 (日)",
      fullDate: "2027-06-27",
      city: "倉敷",
      title: "倉敷一日遊：美觀散策與購物",
      passBadge: "🎫 JR 周遊券 Day 1 / 5（今日起啟用）",
      passType: "jr",
      transportSummary: "搭乘 JR 山陽本線（或伯備線）往返「岡山站 ⇄ 倉敷站」，車程僅約 17 分鐘，今日起正式啟用 JR 周遊券！",
      hotelArea: "岡山車站周邊 (第 2/3 晚)",
      notes: "倉敷川遊船名額有限，抵達美觀地區後建議先去「倉敷館觀光案內所」購買當日船票！",
      items: [
        {
          id: "d2-1",
          time: "09:00",
          category: "🚆 鐵道移動",
          title: "JR 岡山站 ➔ JR 倉敷站",
          desc: "持 JR 周遊券走自動改札機進站，搭乘 JR 山陽本線前往倉敷站，從南口步行約 10-15 分鐘進入美觀地區。",
          highlight: "🎫 啟用 JR 關西廣域周遊券 (第 1 天)",
          mapQuery: "Kurashiki Station",
          done: false
        },
        {
          id: "d2-2",
          time: "上午",
          category: "🛶 散策與遊船",
          title: "倉敷美觀地區散策、川舟遊船與午餐",
          desc: "漫步白壁宅邸與柳樹沿岸，搭乘傳統小舟遊覽倉敷川。午餐可品嚐倉敷名物「ぶっかけ亭本舗 ふるいち」烏龍麵或町家定食、白桃聖代。",
          highlight: "🛶 先衝倉敷館買船票，再慢慢逛牛仔褲街與桃太郎機關博物館！",
          mapQuery: "Kurashiki Bikan Historical Quarter",
          done: false
        },
        {
          id: "d2-3",
          time: "下午",
          category: "🛍️ 商場採買",
          title: "MITSUI OUTLET PARK 倉敷 & Ario 倉敷",
          desc: "從美觀地區走回倉敷站北口即可直通 Ario 商場與三井 Outlet！Ario 有美食街與阿卡將/童裝，中間還有綠意草皮廣場讓孩子放電。",
          highlight: "👶 Ario 2樓餐飲與親子設施齊全，逛累了隨時可休息",
          mapQuery: "MITSUI OUTLET PARK Kurashiki",
          done: false
        },
        {
          id: "d2-4",
          time: "傍晚",
          category: "🚆 返回岡山",
          title: "搭乘 JR 山陽本線返回岡山站",
          desc: "提著戰利品輕鬆搭 JR 回到岡山車站，晚餐可於岡山站周邊享用。",
          highlight: "",
          mapQuery: "Okayama Station",
          done: false
        }
      ]
    },
    {
      day: 3,
      date: "6/28 (一)",
      fullDate: "2027-06-28",
      city: "四國香川",
      title: "四國特色體驗：麵包超人列車、踩烏龍麵與水族館",
      passBadge: "🎫 JR 周遊券 Day 2 / 5 ＋ 麵包超人指定席",
      passType: "jr",
      transportSummary: "岡山 ➔ 琴平 ➔ 宇多津 ➔ 岡山。持 JR 周遊券（宇多津至琴平段或小火車綠色車廂指定席券需另外加購補票）；傍晚搭特急返回岡山。",
      hotelArea: "岡山車站周邊 (第 3/3 晚)",
      notes: "11:17 麵包超人小火車 1號絕對不能遲到！中野烏龍麵學校預約場次請再次確認。",
      items: [
        {
          id: "d3-1",
          time: "10:00",
          category: "📸 鐵道攝影",
          title: "JR 岡山站月台鐵道攝影",
          desc: "提早進站到月台欣賞各式四國特急列車（南風號、潮風號、Marine Liner 雙層列車）與彩繪列車進站。",
          highlight: "📷 鐵道迷小孩最愛時光！順便在車站買鐵路便當上車吃",
          mapQuery: "JR Okayama Station",
          done: false
        },
        {
          id: "d3-2",
          time: "11:17",
          category: "🚂 觀光列車",
          title: "搭乘「瀨戶大橋麵包超人小火車 1號」(岡山 ➔ 琴平)",
          desc: "全車開放式木質景觀車廂，行經壯觀的瀨戶大橋跨海前往四國琴平！車上有麵包超人紀念章與拍照區。",
          highlight: "⚠️ 全車綠色車廂指定席，務必備妥「周遊券＋加購之綠色車廂指定席券」",
          mapQuery: "Kotohira Station",
          done: false
        },
        {
          id: "d3-3",
          time: "下午",
          category: "🍜 親子手作",
          title: "中野烏龍麵學校（琴平校）踩麵團體驗",
          desc: "跟著熱情的老師邊放音樂邊用腳踩烏龍麵團、桿麵、切麵，最後現場煮熟自己做的烏龍麵當午餐，結業還可領取秘傳卷軸畢業證書！",
          highlight: "👨‍👩‍👧‍👦 報名配置：3 小體驗 ＋ 2 大陪同拍照協助",
          mapQuery: "Nakano Udon School Kotohira",
          done: false
        },
        {
          id: "d3-4",
          time: "下午",
          category: "🐬 海景水族館",
          title: "四國水族館（宇多津）看海豚與瀨戶內海景",
          desc: "自琴平前往宇多津站，步行前往緊鄰瀨戶內海的「四國水族館」。必看以瀨戶內海與夕陽為背景的無邊際海豚跳躍秀！",
          highlight: "🌅 夕陽時段的海豚池背光剪影超美，館內動線平緩好走",
          mapQuery: "Shikoku Aquarium",
          done: false
        },
        {
          id: "d3-5",
          time: "傍晚",
          category: "🚄 特急返程",
          title: "宇多津 ➔ 岡山（搭乘特急南風號 / 潮風號或快速 Marine Liner）",
          desc: "再次跨越瀨戶大橋返回岡山車站，整理行李準備隔天跨城移動至大阪。",
          highlight: "",
          mapQuery: "Utazu Station",
          done: false
        }
      ]
    },
    {
      day: 4,
      date: "6/29 (二)",
      fullDate: "2027-06-29",
      city: "岡山 ➔ 大阪",
      title: "歷史巡禮與新幹線跨城移動",
      passBadge: "🎫 JR 周遊券 Day 3 / 5（搭山陽新幹線！）",
      passType: "jr",
      transportSummary: "上午搭市區公車往返後樂園。中午回飯店領行李，自岡山搭 JR 山陽新幹線至「新大阪站」，轉乘 JR 至「新今宮站」。",
      hotelArea: "大阪新今宮周邊 (第 1/5 晚)",
      notes: "今日換飯店日！退房後行李先寄放岡山飯店，中午直接回飯店拿行李去搭新幹線最省力。",
      items: [
        {
          id: "d4-1",
          time: "09:00",
          category: "🏯 歷史巡禮",
          title: "岡山後樂園 & 岡山城（烏城）武士體驗",
          desc: "從岡山站搭乘市區公車直達日本三大名園「岡山後樂園」漫步大草坪，隨後走過月見橋前往全新翻修的「岡山城」，體驗免費試穿城主/公主服飾與武士刀拍照！",
          highlight: "⚔️ 岡山城內有電梯無障礙設施，2樓可換裝拍照、1樓可做備前燒或吃烏城聖代",
          mapQuery: "Okayama Castle",
          done: false
        },
        {
          id: "d4-2",
          time: "中午",
          category: "🚄 新幹線移動",
          title: "JR 岡山站 ➔ 新大阪站 ➔ 新今宮站（飯店入住）",
          desc: "回飯店領取大型行李，使用 JR 關西廣域周遊券搭乘「山陽新幹線 (Nozomi/Mizuho/Sakura 皆可搭)」約 45 分鐘飆速抵達新大阪，再轉 JR 前往新今宮站飯店寄放行李或 Check-in。",
          highlight: "🧳 若攜帶特大行李（三邊總和 160~250cm），記得事先用周遊券劃位「特大行李放置處附帶席」",
          mapQuery: "Shin-Imamiya Station",
          done: false
        },
        {
          id: "d4-3",
          time: "傍晚",
          category: "🏙️ 商圈逛街",
          title: "大阪梅田商圈逛街（LUCUA osaka / 大丸梅田）",
          desc: "從新今宮搭 JR 大阪環狀線直達「大阪站（梅田）」。逛 LUCUA 購物中心、大丸梅田店（13樓有寶可夢中心、任天堂大阪旗艦店、トミカ小汽車專賣店！）。",
          highlight: "🎮 大丸梅田 13F 是小孩天堂，小心荷包失守！",
          mapQuery: "LUCUA osaka",
          done: false
        }
      ]
    },
    {
      day: 5,
      date: "6/30 (三)",
      fullDate: "2027-06-30",
      city: "大阪 USJ",
      title: "日本環球影城 (USJ) 狂歡一日遊",
      passBadge: "🎫 JR 周遊券 Day 4 / 5",
      passType: "jr",
      transportSummary: "自 JR 新今宮站搭乘「大阪環狀線」於「西九條站」轉乘「JR 夢咲線（櫻島線）」至「環球城站 (Universal-City)」。",
      hotelArea: "大阪新今宮周邊 (第 2/5 晚)",
      notes: "務必事先下載「USJ 官方 App」並綁定全家人門票，入園第一時間抽「超級任天堂世界」整理券（或使用快通）！",
      items: [
        {
          id: "d5-1",
          time: "07:30",
          category: "🚆 出發入園",
          title: "新今宮 ➔ 西九條 ➔ 環球城站",
          desc: "持 JR 周遊券直接進站，在西九條站同月台轉乘往櫻島方向的列車，約 20 分鐘即可抵達環球影城大門口！",
          highlight: "🎫 全程屬於 JR 路線，直接用 JR 周遊券免費搭乘",
          mapQuery: "Universal Studios Japan",
          done: false
        },
        {
          id: "d5-2",
          time: "上午",
          category: "🍄 主題園區 1",
          title: "主攻：超級任天堂世界 (Super Nintendo World)",
          desc: "戴上能量手環敲磚塊收集金幣、挑戰「瑪利歐賽車～庫巴的挑戰書～」、搭乘親子友善的「耀西冒險」俯瞰整個蘑菇王國，以及全新「咚奇剛國度」！",
          highlight: "🌟 奇諾比奧咖啡廳記得掃碼預約用餐時段",
          mapQuery: "Super Nintendo World Osaka",
          done: false
        },
        {
          id: "d5-3",
          time: "下午",
          category: "🪄 主題園區 2",
          title: "主攻：哈利波特魔法世界 & 小小兵樂園 / 環球奇境",
          desc: "走進活米村喝冰涼奶油啤酒（無酒精兒童可喝）、看霍格華茲城堡與魔杖互動魔法；下午可帶小朋友去「環球奇境 (Universal Wonderland)」或小小兵園區玩溫和設施。",
          highlight: "🍺 奶油啤酒冰沙版在 6 月底超消暑！",
          mapQuery: "The Wizarding World of Harry Potter Osaka",
          done: false
        },
        {
          id: "d5-4",
          time: "晚上",
          category: "🚆 賦歸休息",
          title: "環球城市步行街晚餐 ➔ 返回新今宮飯店",
          desc: "出園後在 Universal CityWalk 用餐或買消夜，搭 JR 回到新今宮站好好泡澡休息。",
          highlight: "",
          mapQuery: "Universal CityWalk Osaka",
          done: false
        }
      ]
    },
    {
      day: 6,
      date: "7/1 (四)",
      fullDate: "2027-07-01",
      city: "神戶",
      title: "神戶生態互動與浪漫百萬夜景",
      passBadge: "🎫 JR 周遊券 Day 5 / 5（最後一日！）",
      passType: "jr",
      transportSummary: "搭 JR 至「三ノ宮站」（JR 周遊券最後一日）；轉乘神戶新交通 Port Liner 至「計算科學中心站」（可購買 Port Liner 套票或刷 ICOCA）。",
      hotelArea: "大阪新今宮周邊 (第 3/5 晚)",
      notes: "在三ノ宮轉乘 Port Liner 前，可以在 Port Liner 三宮站售票口詢問「神戶動物王國＋電車來回優惠套票」！",
      items: [
        {
          id: "d6-1",
          time: "09:00",
          category: "🚆 跨城交通",
          title: "JR 新今宮 ➔ 大阪站 ➔ JR 三ノ宮站 ➔ 計算科學中心站",
          desc: "使用 JR 周遊券最後一天搭新快速列車前往神戶三ノ宮站，再轉乘高架無人駕駛的 Port Liner 前往神戶動物王國。",
          highlight: "🎫 JR 周遊券第 5 天到期日，回程務必在午夜前出站！",
          mapQuery: "Sannomiya Station",
          done: false
        },
        {
          id: "d6-2",
          time: "全日",
          category: "🦙 親子生態",
          title: "神戶動物王國（室內無障礙・水豚零距離互動）",
          desc: "全區幾乎為室內溫室與平坦無障礙步道，大晴天或下雨都不怕！可以親手餵食水豚、袋鼠、象龜，近距離看鯨頭鸛、兔猻，還有超震撼的飛鳥飛行秀與牧羊犬表演。",
          highlight: "🥕 水豚互動區超熱門，記得準備零錢買飼料讓 3 小餵個過癮！",
          mapQuery: "Kobe Animal Kingdom",
          done: false
        },
        {
          id: "d6-3",
          time: "傍晚",
          category: "🌃 港灣夜景",
          title: "神戶港 (Kobe Harborland / 美利堅公園) 欣賞夜景",
          desc: "傍晚前往神戶港邊，在 umie 商場或馬賽克廣場 (MOSAIC) 享用晚餐（旁邊還有麵包超人博物館商場區可免費逛一樓商店），欣賞神戶塔、海洋博物館與摩天輪點燈夜景。",
          highlight: "🚢 海風徐徐、步道寬敞，拍全家福夜景絕佳地點",
          mapQuery: "Kobe Harborland umie",
          done: false
        },
        {
          id: "d6-4",
          time: "晚上",
          category: "🚆 返回大阪",
          title: "自 JR 神戶站（或三ノ宮站）搭 JR 返回新今宮",
          desc: "從馬賽克廣場步行至「JR 神戶站」比回三宮更近！直接持周遊券搭 JR 返回大阪新今宮。",
          highlight: "💡 小撇步：從神戶港走地下街直通「JR 神戶站」只要約 8 分鐘！",
          mapQuery: "JR Kobe Station",
          done: false
        }
      ]
    },
    {
      day: 7,
      date: "7/2 (五)",
      fullDate: "2027-07-02",
      city: "大阪市區",
      title: "大阪市區遊覽（二擇一彈性日）",
      passBadge: "💳 ICOCA 刷卡日（大阪地鐵）",
      passType: "icoca",
      transportSummary: "今日起 JR 周遊券已結束，全程使用 ICOCA 交通卡刷卡搭乘大阪地鐵 (Osaka Metro) 前往目的地。",
      hotelArea: "大阪新今宮周邊 (第 4/5 晚)",
      notes: "可依當天天氣與孩子體力，在下方一鍵切換「選項 A：海遊館」或「選項 B：Kids Plaza 兒童樂園」！",
      hasOptions: true,
      optionsData: {
        A: [
          {
            id: "d7-a1",
            time: "09:30",
            category: "🚇 地鐵移動 (選項 A)",
            title: "新今宮（動物園前站 / 難波轉）➔ 大阪港站",
            desc: "全程刷 ICOCA 搭乘大阪地鐵前往中央線「大阪港站」，步行約 5-8 分鐘抵達天保山海遊館。",
            highlight: "💳 今日起使用 ICOCA 感應進站",
            mapQuery: "Osakako Station",
            done: false
          },
          {
            id: "d7-a2",
            time: "上午～下午",
            category: "🦈 選項 A：水族館",
            title: "大阪海遊館（看巨大鯨鯊與環太平洋海洋生物）",
            desc: "全球最大級室內水族館！搭手扶梯直達 8 樓森林區，再沿著螺旋坡道一路往下繞行巨大的「太平洋水槽」，從不同深度近距離觀賞大鯨鯊、鬼蝠魟、企鵝與海豹。",
            highlight: "♿ 全館螺旋斜坡設計，完全不用扛樓梯，非常適合親子慢遊！",
            mapQuery: "Osaka Aquarium Kaiyukan",
            done: false
          },
          {
            id: "d7-a3",
            time: "下午",
            category: "🎡 選項 A：摩天輪與午餐",
            title: "天保山 Marketplace 用餐 & 天保山大摩天輪",
            desc: "在海遊館旁的天保山商場享用大阪美食（內有浪花美食橫丁復古街），隨後搭乘高達 112.5 公尺的「天保山大摩天輪」俯瞰大阪灣與明石海峽大橋（有透明車廂可選）。",
            highlight: "🎡 亦可順遊旁邊的樂高樂園探索中心或搭聖瑪麗亞號帆船",
            mapQuery: "Tempozan Giant Ferris Wheel",
            done: false
          }
        ],
        B: [
          {
            id: "d7-b1",
            time: "09:30",
            category: "🚇 地鐵移動 (選項 B)",
            title: "動物園前站 ➔ 扇町站（Osaka Metro 堺筋線直達！）",
            desc: "從新今宮旁的「動物園前站」搭乘地鐵堺筋線，不用轉車即可直達「扇町站」，2號出口出站即達 Kids Plaza Osaka！",
            highlight: "🚇 堺筋線一班車直達，交通超輕鬆！",
            mapQuery: "Ogimachi Station Osaka",
            done: false
          },
          {
            id: "d7-b2",
            time: "上午～下午",
            category: "🧗 選項 B：室內放電",
            title: "大阪兒童樂園 (Kids Plaza Osaka) 科學互動與攀爬",
            desc: "日本第一座專為兒童打造的博物館！由奧地利建築師百水先生設計的魔幻「兒童城堡」立體迷宮與溜滑梯、超大泡泡體驗、科學互動實驗、以及超市收銀/郵差/章魚燒老闆職業體驗。",
            highlight: "🎫 憑當日票券可中途出館到樓下吃午餐再進場繼續玩！旁有扇町公園超長溜滑梯",
            mapQuery: "Kids Plaza Osaka",
            done: false
          },
          {
            id: "d7-b3",
            time: "下午",
            category: "🥞 選項 B：商店街散策",
            title: "天神橋筋商店街（日本最長商店街）覓食逛街",
            desc: "緊鄰 Kids Plaza 的就是全長 2.6 公里的天神橋筋商店街，有頂棚遮陽避雨，可以邊走邊吃中村屋可樂餅、鯛魚燒、大阪燒與逛百元藥妝店。",
            highlight: "😋 在地人日常商店街，物價親民又好吃",
            mapQuery: "Tenjinbashisuji Shopping Street",
            done: false
          }
        ]
      }
    },
    {
      day: 8,
      date: "7/3 (六)",
      fullDate: "2027-07-03",
      city: "京都 ➔ 大阪",
      title: "京都鐵道博物館與新世界串炸之夜",
      passBadge: "💳 ICOCA 刷卡日（JR 京都線＋新世界）",
      passType: "icoca",
      transportSummary: "自新今宮搭 JR 至「大阪站」，轉乘 JR 京都線新快速至「京都站」，再轉乘 JR 嵯峨野線 1 站至「梅小路京都西站」出站即達。",
      hotelArea: "大阪新今宮周邊 (第 5/5 晚)",
      notes: "想體驗京都鐵道博物館的「駕駛模擬器」，記得先下載官方抽選 App 並在入館後立刻登記抽選，同時先買 SL 蒸汽火車乘車券！",
      items: [
        {
          id: "d8-1",
          time: "08:30",
          category: "🚆 鐵道出發",
          title: "JR 新今宮 ➔ 大阪 ➔ 京都 ➔ 梅小路京都西站",
          desc: "全程刷 ICOCA 搭乘 JR 前往京都。在京都站轉搭嵯峨野線（32/33號月台）只要 1 站（約 3 分鐘）就到梅小路京都西站，出站過馬路就是博物館大門！",
          highlight: "💳 刷 ICOCA 免買票，轉乘順暢",
          mapQuery: "Umekoji-Kyotonishi Station",
          done: false
        },
        {
          id: "d8-2",
          time: "上午～午後",
          category: "🚂 鐵道聖地",
          title: "京都鐵道博物館：扇形車庫、實體 SL 蒸汽火車、模擬器",
          desc: "鐵道迷終極聖地！參觀壯觀的木造「扇形車庫」與轉車台、實際搭乘冒著白煙與汽笛聲的「SL Steam 號」蒸汽火車、體驗新幹線/在來線駕駛模擬器，還能在 2F 景觀餐廳邊看窗外新幹線與 HARUKA 呼嘯而過邊吃火車便當！",
          highlight: "🚂 SL 蒸汽火車每班次固定，進館建議先到本館後方月台購票",
          mapQuery: "Kyoto Railway Museum",
          done: false
        },
        {
          id: "d8-3",
          time: "下午",
          category: "🗼 最後採買與美食",
          title: "返回大阪新今宮：通天閣 / 新世界商圈 & 串炸晚餐",
          desc: "下午搭 JR 返回新今宮站，步行即可進入充滿昭和復古霓虹風情的「新世界商店街」與地標「通天閣」。晚餐大啖現炸酥脆的大阪名物「串炸（串カツだるま 元祖串炸達摩等）」，順便去 MEGA 唐吉訶德新世界店做最後伴手禮採買！",
          highlight: "🛒 MEGA 唐吉訶德新世界店就在新今宮站旁，買完直接提回飯店打包超方便！",
          mapQuery: "Tsutenkaku",
          done: false
        }
      ]
    },
    {
      day: 9,
      date: "7/4 (日)",
      fullDate: "2027-07-04",
      city: "關西機場 ➔ 返台",
      title: "整理行李、直達關西機場搭機返台",
      passBadge: "🚆 機場直達車（南海電鐵 / JR Haruka）",
      passType: "bus",
      transportSummary: "上午整理行李退房，自「新今宮站」搭乘南海電鐵（空港急行或 Rapi:t 特急）或 JR 關空快速/Haruka 直達「關西國際機場 (KIX)」，搭乘中華航空 CI 153 返台。",
      hotelArea: "溫暖的家 🏠",
      notes: "新今宮站有南海電鐵與 JR 兩條路線都能直達關西機場！建議於 CI 153 起飛前 2.5 ~ 3 小時抵達關西機場第一航廈 (T1)。",
      items: [
        {
          id: "d9-1",
          time: "上午",
          category: "🧳 退房出發",
          title: "飯店整理行李退房 ➔ 新今宮站搭直達車往關西機場",
          desc: "從新今宮站搭乘「南海電鐵（Rapi:t 特急約 36 分鐘 / 空港急行約 42 分鐘）」或「JR 關空快速/Haruka」直達關西國際機場，完全免轉車！",
          highlight: "🚆 新今宮住處最大優勢：推著大行李一班車直達機場航廈",
          mapQuery: "Kansai International Airport",
          done: false
        },
        {
          id: "d9-2",
          time: "中午",
          category: "✈️ 報到與免稅店",
          title: "關西國際機場第一航廈 (T1) 辦理登機與免稅採買",
          desc: "於中華航空櫃檯辦理行李託運與領取登機證。通關後全新改裝的 KIX 大型步入式免稅店可以做最後衝刺（白色戀人、呼吸巧克力、京都抹茶甜點等）。",
          highlight: "🛍️ 關西機場 T1 改裝後免稅店動線寬敞，也可使用線上預訂取貨",
          mapQuery: "Kansai International Airport Terminal 1",
          done: false
        },
        {
          id: "d9-3",
          time: "下午",
          category: "🛫 平安返台",
          title: "搭乘中華航空 CI 153 航班返回台灣",
          desc: "帶著滿滿 9 天 8 夜岡山、四國與關西的親子美好回憶與戰利品，平安飛抵台灣！",
          highlight: "🎉 2027 岡山進・關西出親子大冒險圓滿成功！",
          mapQuery: "Taoyuan International Airport",
          done: false
        }
      ]
    }
  ],
  checklist: [
    { id: "c1", text: "護照效期確認（2大3小，需滿 6 個月以上）", done: false },
    { id: "c2", text: "台灣虎航 IT 214 (去程) & 華航 CI 153 (回程) 電子機票確認", done: false },
    { id: "c3", text: "購買「JR 關西廣域周遊券 5日券」(6/27~7/1 使用)", done: false },
    { id: "c4", text: "預訂 6/28「瀨戶大橋麵包超人小火車 1號 (11:17)」綠色車廂指定席券", done: false },
    { id: "c5", text: "預約 6/28「中野烏龍麵學校（琴平校）」(3小體驗＋2大陪同)", done: false },
    { id: "c6", text: "購買 6/30「日本環球影城 USJ」門票 & 下載官方 App 綁定", done: false },
    { id: "c7", text: "準備全員 ICOCA 卡（含兒童 ICOCA，Day 7~9 使用）", done: false },
    { id: "c8", text: "出發前填寫 Visit Japan Web (VJW) 入境與海關申報 QR Code", done: false },
    { id: "c9", text: "日本網卡 / eSIM / 漫遊開通 & 行動電源隨身攜帶", done: false }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultTripData, ...parsed };
    }
  } catch (e) {
    console.warn("讀取儲存資料失敗，使用預設行程", e);
  }
  return JSON.parse(JSON.stringify(defaultTripData));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("儲存失敗", e);
  }
}

function updateCountdown() {
  const badge = document.getElementById("countdownBadge");
  if (!badge) return;
  const target = new Date("2027-06-26T00:00:00+08:00");
  const now = new Date();
  const diffDays = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    badge.textContent = `⏳ 距離出發還有 ${diffDays} 天`;
  } else if (diffDays >= -8) {
    badge.textContent = `🎉 旅途進行中！Day ${Math.abs(diffDays) + 1}`;
  } else {
    badge.textContent = `✨ 美好旅程回憶`;
  }
}

function renderDayPills() {
  const container = document.getElementById("daySelector");
  if (!container) return;
  container.innerHTML = state.days
    .map((d) => {
      const isActive = d.day === state.selectedDay ? "active" : "";
      const isJr = d.passType === "jr" ? "jr-pass-day" : "";
      const shortDate = d.date.split(" ")[0];
      return `
        <button class="day-pill ${isActive} ${isJr}" onclick="selectDay(${d.day})">
          <span class="d-num">Day ${d.day}</span>
          <span class="d-date">${shortDate}</span>
          <span class="d-city">${d.city.split(" ")[0]}</span>
        </button>
      `;
    })
    .join("");
}

function selectDay(dayNum) {
  state.selectedDay = dayNum;
  state.activeTab = "itinerary";
  saveState();
  renderAll();
}

function switchTab(tabName) {
  state.activeTab = tabName;
  saveState();
  renderAll();
}

function switchDay7Option(opt) {
  state.day7Option = opt;
  saveState();
  renderMainContent();
}

function toggleItemDone(dayNum, itemId) {
  const dayObj = state.days.find((d) => d.day === dayNum);
  if (!dayObj) return;

  if (dayObj.hasOptions) {
    const list = dayObj.optionsData[state.day7Option] || [];
    const item = list.find((i) => i.id === itemId);
    if (item) item.done = !item.done;
  } else {
    const item = dayObj.items.find((i) => i.id === itemId);
    if (item) item.done = !item.done;
  }
  saveState();
  renderMainContent();
}

function updateDayNote(dayNum, val) {
  const dayObj = state.days.find((d) => d.day === dayNum);
  if (!dayObj) return;
  dayObj.notes = val;
  saveState();
}

function toggleChecklist(id) {
  const item = state.checklist.find((c) => c.id === id);
  if (item) {
    item.done = !item.done;
    saveState();
    renderMainContent();
  }
}

function addChecklistItem() {
  const input = document.getElementById("newChecklistInput");
  if (!input || !input.value.trim()) return;
  state.checklist.push({
    id: "c-" + Date.now(),
    text: input.value.trim(),
    done: false
  });
  input.value = "";
  saveState();
  renderMainContent();
}

function updateHotelInfo(key, val) {
  state.hotelNames[key] = val;
  saveState();
}

function openAddEventModal() {
  document.getElementById("addEventModal").classList.add("open");
}

function closeAddEventModal() {
  document.getElementById("addEventModal").classList.remove("open");
}

function saveNewEvent() {
  const time = document.getElementById("evtTime").value.trim() || "自訂時段";
  const title = document.getElementById("evtTitle").value.trim();
  const desc = document.getElementById("evtDesc").value.trim();
  const mapQuery = document.getElementById("evtMap").value.trim() || title;

  if (!title) {
    alert("請輸入行程標題！");
    return;
  }

  const dayObj = state.days.find((d) => d.day === state.selectedDay);
  const newItem = {
    id: "custom-" + Date.now(),
    time,
    category: "📌 自訂行程",
    title,
    desc: desc || "自訂補充行程項目",
    highlight: "",
    mapQuery,
    done: false
  };

  if (dayObj.hasOptions) {
    dayObj.optionsData[state.day7Option].push(newItem);
  } else {
    dayObj.items.push(newItem);
  }

  document.getElementById("evtTime").value = "";
  document.getElementById("evtTitle").value = "";
  document.getElementById("evtDesc").value = "";
  document.getElementById("evtMap").value = "";

  closeAddEventModal();
  saveState();
  renderMainContent();
}

function resetDefaultData() {
  if (confirm("確定要重置所有自訂修改與勾選狀態，恢復預設行程嗎？")) {
    localStorage.removeItem(STORAGE_KEY);
    state = JSON.parse(JSON.stringify(defaultTripData));
    renderAll();
  }
}

function renderItineraryView() {
  const d = state.days.find((x) => x.day === state.selectedDay);
  if (!d) return "";

  const transportClass =
    d.passType === "jr"
      ? "transport-jr"
      : d.passType === "icoca"
      ? "transport-icoca"
      : "transport-bus";

  const currentItems = d.hasOptions ? d.optionsData[state.day7Option] : d.items;

  const optionSwitcherHtml = d.hasOptions
    ? `
      <div class="option-switcher">
        <div class="option-switcher-title">🔀 Day 7 二擇一彈性方案切換（點擊切換當日行程）：</div>
        <div class="option-buttons">
          <button class="opt-btn ${state.day7Option === "A" ? "active" : ""}" onclick="switchDay7Option('A')">
            🦈 選項 A：大阪海遊館＋摩天輪
          </button>
          <button class="opt-btn ${state.day7Option === "B" ? "active" : ""}" onclick="switchDay7Option('B')">
            🧗 選項 B：Kids Plaza 兒童樂園
          </button>
        </div>
      </div>
    `
    : "";

  const itemsHtml = currentItems
    .map((item) => {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        item.mapQuery || item.title
      )}`;
      return `
        <div class="timeline-item ${item.done ? "completed" : ""}">
          <div class="timeline-dot"></div>
          <div class="item-top-row">
            <span class="item-time">${item.time}</span>
            <span class="item-category">${item.category}</span>
          </div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-desc">${item.desc}</p>
          ${
            item.highlight
              ? `<div class="item-highlight">${item.highlight}</div>`
              : ""
          }
          <div class="item-actions">
            <a class="action-btn map-btn" href="${mapUrl}" target="_blank" rel="noopener">
              📍 Google 地圖導航
            </a>
            <button class="action-btn check-btn" onclick="toggleItemDone(${d.day}, '${item.id}')">
              ${item.done ? "✅ 已完成 (點擊取消)" : "⬜ 標記完成"}
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="day-summary-card">
      <div class="day-header-row">
        <div class="day-title-group">
          <span class="day-date-chip">Day ${d.day} ・ 2027/${d.date}</span>
          <h2>${d.title}</h2>
        </div>
        <span class="city-badge">📍 ${d.city}</span>
      </div>

      <div class="info-grid">
        <div class="info-box ${transportClass}">
          <span class="info-box-icon">🚆</span>
          <div class="info-box-content">
            <span class="info-box-label">${d.passBadge}</span>
            <div>${d.transportSummary}</div>
          </div>
        </div>
        <div class="info-box hotel-box">
          <span class="info-box-icon">🏨</span>
          <div class="info-box-content">
            <span class="info-box-label">當晚住宿地點</span>
            <div><strong>${d.hotelArea}</strong></div>
          </div>
        </div>
      </div>
    </div>

    ${optionSwitcherHtml}

    <div class="timeline-list">
      ${itemsHtml}
    </div>

    <button class="add-event-btn" onclick="openAddEventModal()">
      ＋ 在 Day ${d.day} 新增自訂行程或餐廳
    </button>

    <div class="day-notes-card">
      <h4>
        <span>📝 Day ${d.day} 隨手備註（自動儲存）</span>
      </h4>
      <textarea
        class="notes-textarea"
        placeholder="輸入訂位代號、乘車班次、或是注意事項..."
         oninput="updateDayNote(${d.day}, this.value)"
      >${d.notes || ""}</textarea>
    </div>
  `;
}

function renderPassView() {
  return `
    <div class="section-card">
      <h3>🎫 9天8夜 交通票券作戰總覽</h3>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0;">
        本行程完美切齊 <strong>JR 關西廣域周遊券 (5日券)</strong> 於 <strong>Day 2 (6/27) ～ Day 6 (7/1)</strong> 連續使用，涵蓋倉敷、四國、岡山➔新大阪新幹線、USJ 與神戶！
      </p>
      <div class="pass-timeline-bar">
        <div class="pass-cell bus">D1<br>6/26<br>巴士</div>
        <div class="pass-cell jr">D2<br>6/27<br>JR 1</div>
        <div class="pass-cell jr">D3<br>6/28<br>JR 2</div>
        <div class="pass-cell jr">D4<br>6/29<br>JR 3</div>
        <div class="pass-cell jr">D5<br>6/30<br>JR 4</div>
        <div class="pass-cell jr">D6<br>7/1<br>JR 5</div>
        <div class="pass-cell icoca">D7<br>7/2<br>ICOCA</div>
        <div class="pass-cell icoca">D8<br>7/3<br>ICOCA</div>
        <div class="pass-cell bus">D9<br>7/4<br>機場車</div>
      </div>
    </div>

    <div class="section-card">
      <h3>🟢 Day 2 ~ Day 6：JR 關西廣域周遊券 (5日)</h3>
      <ul style="font-size:0.86rem;padding-left:18px;margin:0;line-height:1.7;">
        <li><strong>啟用日：</strong>6/27 (Day 2) 岡山 ⇄ 倉敷</li>
        <li><strong>四國段注意 (Day 3)：</strong>周遊券涵蓋至「宇多津站 / 高松站」。前往<strong>琴平站</strong>的區間（宇多津 ⇄ 琴平）屬於 JR 四國範圍，且<strong>「麵包超人小火車 1號」為全車綠色車廂指定席</strong>，需另外加購該段乘車券＋綠色車廂指定席券！</li>
        <li><strong>新幹線跨城 (Day 4)：</strong>岡山 ➔ 新大阪 可搭乘山陽新幹線（含 Nozomi、Mizuho、Sakura、Hikari）。若有大型行李請事先預約「特大行李放置處附帶席」。</li>
        <li><strong>大阪環球影城 (Day 5)：</strong>新今宮 ➔ 西九條 ➔ 環球城站 全程為 JR 路線，直接刷周遊券進站。</li>
        <li><strong>神戶一日遊 (Day 6)：</strong>新今宮 ➔ 大阪 ➔ JR 三ノ宮 / 神戶站 使用周遊券；三宮往返「神戶動物王國」的 Port Liner 為私鐵，現場買套票或刷 ICOCA。</li>
      </ul>
    </div>

    <div class="section-card">
      <h3>🟣 Day 7 ~ Day 9：ICOCA 與關西機場交通</h3>
      <ul style="font-size:0.86rem;padding-left:18px;margin:0;line-height:1.7;">
        <li><strong>Day 7 (大阪市區)：</strong>刷 ICOCA 搭乘 Osaka Metro 地鐵（往大阪港海遊館，或堺筋線直達扇町站 Kids Plaza）。</li>
        <li><strong>Day 8 (京都鐵道博物館)：</strong>刷 ICOCA 搭 JR（新今宮 ➔ 大阪 ➔ 京都 ➔ 梅小路京都西站）。</li>
        <li><strong>Day 9 (新今宮 ➔ 關西機場)：</strong>新今宮站可選擇搭乘<strong>「南海電鐵（空港急行 / 特急 Rapi:t）」</strong>或<strong>「JR 關空快速 / 特急 Haruka」</strong>直達關西機場第一航廈。</li>
      </ul>
    </div>
  `;
}

function renderFlightHotelView() {
  return `
    <div class="section-card">
      <h3>✈️ 航班資訊（岡山進・關西出）</h3>
      <div class="info-box transport-bus" style="margin-bottom:10px;">
        <span class="info-box-icon">🛫</span>
        <div class="info-box-content">
          <span class="info-box-label">去程：2027/6/26 (六) Day 1</span>
          <div><strong>台灣虎航 IT 214</strong>（桃園 TPE ➔ 岡山 OKJ）</div>
          <div style="font-size:0.8rem;opacity:0.85;margin-top:2px;">抵達後搭乘岡山機場利木津巴士直達 JR 岡山站西口</div>
        </div>
      </div>

      <div class="info-box transport-icoca">
        <span class="info-box-icon">🛬</span>
        <div class="info-box-content">
          <span class="info-box-label">回程：2027/7/4 (日) Day 9</span>
          <div><strong>中華航空 CI 153</strong>（關西 KIX ➔ 桃園 TPE）</div>
          <div style="font-size:0.8rem;opacity:0.85;margin-top:2px;">自新今宮站搭乘直達列車前往關西國際機場第一航廈 (T1)</div>
        </div>
      </div>
    </div>

    <div class="section-card">
      <h3>🏨 住宿安排（共 8 晚，僅換 1 次飯店！）</h3>
      <div class="form-group">
        <label>🍑 第一階段：6/26 ~ 6/29（3 晚）- 岡山車站周邊</label>
        <textarea
          rows="2"
          oninput="updateHotelInfo('okayama', this.value)"
          placeholder="點擊輸入岡山飯店名稱、電話與訂房代號..."
        >${state.hotelNames.okayama}</textarea>
        <div style="margin-top:6px;">
          <a class="action-btn map-btn" href="https://www.google.com/maps/search/?api=1&query=Okayama+Station+Hotels" target="_blank">📍 查看岡山站周邊地圖</a>
        </div>
      </div>

      <div class="form-group" style="margin-top:16px;">
        <label>🐙 第二階段：6/29 ~ 7/4（5 晚）- 大阪新今宮周邊</label>
        <textarea
          rows="2"
          oninput="updateHotelInfo('osaka', this.value)"
          placeholder="點擊輸入大阪新今宮飯店名稱、電話與訂房代號..."
        >${state.hotelNames.osaka}</textarea>
        <div style="margin-top:6px;">
          <a class="action-btn map-btn" href="https://www.google.com/maps/search/?api=1&query=Shin-Imamiya+Station" target="_blank">📍 查看新今宮站周邊地圖</a>
        </div>
      </div>
    </div>
  `;
}

function renderChecklistView() {
  const itemsHtml = state.checklist
    .map(
      (c) => `
      <label class="checklist-item ${c.done ? "done" : ""}">
        <input type="checkbox" ${c.done ? "checked" : ""} onchange="toggleChecklist('${c.id}')" />
        <span>${c.text}</span>
      </label>
    `
    )
    .join("");

  return `
    <div class="section-card">
      <h3>✅ 行前待辦與必備票券清單（2大3小）</h3>
      <div>${itemsHtml}</div>
      <div style="display:flex;gap:8px;margin-top:14px;">
        <input
          id="newChecklistInput"
          type="text"
          placeholder="新增待辦事項或行李清單..."
          style="flex:1;padding:9px 12px;border:1px solid var(--border-color);border-radius:10px;font-size:0.88rem;"
        />
        <button class="btn-primary" onclick="addChecklistItem()">新增</button>
      </div>
    </div>

    <div class="section-card">
      <h3>⚙️ 旅遊手冊設定</h3>
      <p style="font-size:0.82rem;color:var(--text-muted);margin-top:0;">
        所有打勾進度、Day 7 方案選擇、飯店備註與新增行程皆會自動儲存在您的手機瀏覽器中。
      </p>
      <button class="btn-secondary" onclick="resetDefaultData()" style="width:100%;">
        🔄 重置所有狀態回預設行程
      </button>
    </div>
  `;
}

function renderMainContent() {
  const main = document.getElementById("mainContainer");
  const daySelectorWrap = document.getElementById("daySelectorWrap");
  if (!main) return;

  if (state.activeTab === "itinerary") {
    daySelectorWrap.style.display = "block";
    main.innerHTML = renderItineraryView();
  } else {
    daySelectorWrap.style.display = "none";
    if (state.activeTab === "pass") {
      main.innerHTML = renderPassView();
    } else if (state.activeTab === "flightHotel") {
      main.innerHTML = renderFlightHotelView();
    } else if (state.activeTab === "checklist") {
      main.innerHTML = renderChecklistView();
    }
  }

  // 更新底部導覽列 Active 狀態
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === state.activeTab);
  });
}

function renderAll() {
  updateCountdown();
  renderDayPills();
  renderMainContent();
}

window.addEventListener("DOMContentLoaded", () => {
  renderAll();
});
