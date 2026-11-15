// ============================================================
// 七年級自然第 2 章「養分」互動複習網站
// 資料來源：100% 依據課堂講義（p.80–122）與講義解答整理，無課外擴充
// ============================================================

const studyData = [
  // -------------------- 2-1 食物中的養分 --------------------
  {
    id: "2-1-nutrients",
    chapter: "2-1",
    chapterLabel: "2-1 食物中的養分",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: "🥗",
    title: "六大養分分類、熱量與功能總整理（p.80–81）",
    subtitle: "可產生能量（醣類、蛋白質、脂質）vs. 不能產生能量（水、礦物質、維生素）",
    defaultOpen: true,
    bodyHtml: `
      <div class="space-y-4">
        <div class="grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
            <p class="text-xs font-black text-amber-800">⚡ 可產生能量的養分（須消化分解為小分子才能吸收）</p>
            <ul class="mt-2 space-y-1 text-sm text-slate-700">
              <li>• <strong>醣類（碳水化合物）</strong>：<strong>4 大卡／公克</strong></li>
              <li>• <strong>蛋白質</strong>：<strong>4 大卡／公克</strong></li>
              <li>• <strong>脂質</strong>：<strong>9 大卡／公克</strong></li>
            </ul>
          </div>
          <div class="rounded-2xl border border-sky-200 bg-sky-50/70 p-4">
            <p class="text-xs font-black text-sky-800">💧 不能產生能量的養分（可直接吸收，無需消化分解）</p>
            <ul class="mt-2 space-y-1 text-sm text-slate-700">
              <li>• <strong>水</strong>：生物體內含量最多的成分</li>
              <li>• <strong>礦物質</strong>：如鐵、鈣、鈉</li>
              <li>• <strong>維生素</strong>：如維生素 A、C、D</li>
            </ul>
          </div>
        </div>

        <div class="table-wrap">
          <table class="study-table">
            <thead>
              <tr>
                <th class="w-28">養分種類</th>
                <th>功能與講義重點</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-amber-800">醣類<br><span class="text-xs font-normal text-slate-500">(碳水化合物)</span></td>
                <td>
                  1. 提供熱量：<strong>4 大卡／公克</strong>。<br>
                  2. 植物以<strong>澱粉</strong>形式，動物以<strong>肝糖</strong>形式儲存能量。<br>
                  3. 醣類中的<strong>纖維素</strong>為植物細胞壁的主要組成物質。<br>
                  <span class="mt-1 inline-block rounded bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800">註：人體無法消化、吸收纖維素，因此纖維素無法提供人體能量。</span>
                </td>
              </tr>
              <tr>
                <td class="font-bold text-amber-800">蛋白質</td>
                <td>
                  1. 提供熱量：<strong>4 大卡／公克</strong>。<br>
                  2. 可構成人體的<strong>肌肉、頭髮、指甲</strong>和紅血球內的<strong>血紅素</strong>等構造。
                </td>
              </tr>
              <tr>
                <td class="font-bold text-amber-800">脂質</td>
                <td>
                  1. 提供熱量：<strong>9 大卡／公克</strong>。<br>
                  2. 是控制細胞內、外物質進出的<strong>細胞膜</strong>主要成分。<br>
                  3. 分布在皮膚下層，可隔絕熱量散失以達到<strong>保溫</strong>效果。
                </td>
              </tr>
              <tr>
                <td class="font-bold text-sky-800">水</td>
                <td>
                  1. 生物體內含量最多的成分。<br>
                  2. 可讓物質溶解在其中成為水溶液，有利物質的反應和運送。<br>
                  3. 可調節體溫。
                </td>
              </tr>
              <tr>
                <td class="font-bold text-sky-800">礦物質</td>
                <td>
                  1. 可調節生理機能或組成生物體構造的一部分。<br>
                  2. <strong>鐵</strong>與人體的<strong>造血功能</strong>有關（缺鐵會導致貧血）。<br>
                  3. <strong>鈣</strong>為建構<strong>骨頭和牙齒</strong>的主要成分（缺鈣會導致骨質疏鬆症）。<br>
                  4. <strong>鈉</strong>和<strong>神經訊息的傳遞</strong>有關。
                </td>
              </tr>
              <tr>
                <td class="font-bold text-sky-800">維生素</td>
                <td>
                  1. 可調節生理機能，缺乏時會導致生理失調甚至罹患疾病。<br>
                  2. <strong>維生素 A</strong> 和視覺有關，缺乏可能會造成<strong>夜盲症</strong>。<br>
                  3. 缺乏<strong>維生素 C</strong>，可能會造成<strong>壞血病</strong>（牙齦、皮下或肌肉等處不正常出血）。<br>
                  4. <strong>維生素 D</strong> 和鈣的吸收有關，缺乏可能會造成<strong>軟骨症</strong>（適度晒太陽可產生維生素 D）。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
          <p class="font-black">💡 老師說 ＆ 必考觀念補充</p>
          <ul class="mt-1.5 space-y-1">
            <li>• 生物需要能量時，細胞會先分解<strong>醣類</strong>，再分解<strong>脂質</strong>，最後才分解<strong>蛋白質</strong>。</li>
            <li>• 人體在休息狀態下維持生命現象正常運作所需的最少能量，稱為<strong>基礎代謝能量</strong>，因此人在<strong>睡眠中</strong>仍需消耗能量。</li>
            <li>• 營養標示中的<strong>鈉</strong>與<strong>纖維素</strong>不能產生熱量；維生素攝取過量反而會累積在體內造成身體不適。</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: "2-1-experiment",
    chapter: "2-1",
    chapterLabel: "2-1 食物中的養分",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: "🧪",
    title: "實驗 2-1：食物中醣類的測定（碘液 vs. 本氏液）（p.83–85）",
    subtitle: "檢測澱粉用碘液，檢測葡萄糖用本氏液（需隔水加熱）",
    defaultOpen: false,
    bodyHtml: `
      <div class="space-y-4">
        <div class="grid gap-4 sm:grid-cols-2">
          <!-- 碘液卡片 -->
          <div class="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between">
              <h4 class="font-black text-slate-900">1. 澱粉的測定：碘液</h4>
              <span class="rounded-full bg-amber-600 px-2.5 py-0.5 text-xs font-bold text-white">原色：黃褐色</span>
            </div>
            <p class="mt-2 text-sm text-slate-600">將碘液滴在食物（如熟米飯）上，<strong>不需加熱</strong>即可觀察顏色變化：</p>
            <div class="mt-3 flex items-center gap-2 text-xs font-bold">
              <span class="rounded-lg bg-amber-500 px-2.5 py-1.5 text-white">無澱粉：黃褐色</span>
              <span class="text-slate-400">→</span>
              <span class="rounded-lg bg-slate-900 px-2.5 py-1.5 text-white">有澱粉：藍黑色（或紫紅色）</span>
            </div>
            <p class="mt-2 text-xs text-slate-500">※ 老師說：直鏈澱粉（如麵粉）呈藍黑色；支鏈澱粉（如玉米粉、糯米粉）呈紫紅色。</p>
          </div>

          <!-- 本氏液卡片 -->
          <div class="rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between">
              <h4 class="font-black text-slate-900">2. 葡萄糖的測定：本氏液</h4>
              <span class="rounded-full bg-sky-400 px-2.5 py-0.5 text-xs font-bold text-white">原色：淡藍色</span>
            </div>
            <p class="mt-2 text-sm text-slate-600">加入本氏液後必須<strong>隔水加熱</strong>（燒杯水面需高於試管水面，使加熱均勻）：</p>
            <div class="mt-3 flex flex-wrap items-center gap-1.5 text-xs font-bold">
              <span class="rounded-lg bg-sky-300 px-2 py-1 text-sky-950">無：淡藍</span>
              <span class="text-slate-400">→</span>
              <span class="rounded-lg bg-emerald-500 px-2 py-1 text-white">綠</span>
              <span class="rounded-lg bg-yellow-400 px-2 py-1 text-yellow-950">黃</span>
              <span class="rounded-lg bg-orange-500 px-2 py-1 text-white">橙</span>
              <span class="rounded-lg bg-red-600 px-2 py-1 text-white">紅（濃度高）</span>
            </div>
            <p class="mt-2 text-xs text-slate-500">※ 顏色越偏紅色，表示葡萄糖濃度越高。</p>
          </div>
        </div>

        <div class="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
          <p class="font-bold text-slate-900">🔍 實驗結果舉例（p.84–85）＆ 注意事項</p>
          <p class="mt-1">• <strong>熟米飯</strong>：滴碘液呈<strong>藍黑色</strong>（含澱粉）；加本氏液隔水加熱維持<strong>淡藍色</strong>。</p>
          <p>• <strong>芭樂／葡萄</strong>：滴碘液維持<strong>黃褐色</strong>；加本氏液隔水加熱呈<strong>黃、橙或紅色</strong>（含葡萄糖）。</p>
          <p>• 若檢測不出某養分，不代表完全沒有，可能是含量太少而測不出來。</p>
        </div>

        <!-- 互動小實驗：試管變色模擬器 -->
        <div class="rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 p-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="text-sm font-black text-emerald-900">🎮 互動實驗室：動手測測看食物中的醣類！</p>
            <span class="rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-emerald-700 shadow-sm">點擊按鈕觀察試管變色</span>
          </div>
          <div class="mt-4 flex flex-col items-center gap-5 sm:flex-row">
            <!-- 試管視覺區 -->
            <div class="flex flex-col items-center">
              <div class="relative flex h-32 w-14 items-end overflow-hidden rounded-b-full border-2 border-slate-400 bg-white/80 shadow-inner">
                <div id="lab1-liquid" class="relative h-20 w-full transition-colors duration-700" style="background-color: #38bdf8;">
                  <div id="lab1-bubbles" class="hidden">
                    <span class="lab-bubble" style="left: 10px; animation-delay: 0s;"></span>
                    <span class="lab-bubble" style="left: 24px; animation-delay: 0.4s;"></span>
                    <span class="lab-bubble" style="left: 36px; animation-delay: 0.8s;"></span>
                  </div>
                </div>
              </div>
              <span id="lab1-tube-label" class="mt-2 text-xs font-bold text-slate-600">請選擇下方實驗組合</span>
            </div>
            <!-- 按鈕控制區 -->
            <div class="flex-1 space-y-2.5 text-xs">
              <p class="font-bold text-slate-700">① 碘液檢測（測澱粉，免加熱）：</p>
              <div class="flex flex-wrap gap-2">
                <button type="button" onclick="runSugarLab('iodine-rice')" class="rounded-xl bg-white px-3 py-1.5 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-amber-50 hover:ring-amber-300">🍚 熟米飯＋碘液</button>
                <button type="button" onclick="runSugarLab('iodine-water')" class="rounded-xl bg-white px-3 py-1.5 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-amber-50 hover:ring-amber-300">💧 水（對照組）＋碘液</button>
              </div>
              <p class="pt-1 font-bold text-slate-700">② 本氏液檢測（測葡萄糖，隔水加熱）：</p>
              <div class="flex flex-wrap gap-2">
                <button type="button" onclick="runSugarLab('benedict-water')" class="rounded-xl bg-white px-3 py-1.5 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-sky-50 hover:ring-sky-300">💧 水＋本氏液加熱</button>
                <button type="button" onclick="runSugarLab('benedict-low')" class="rounded-xl bg-white px-3 py-1.5 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-emerald-50 hover:ring-emerald-300">🍏 芭樂（低濃度）加熱</button>
                <button type="button" onclick="runSugarLab('benedict-high')" class="rounded-xl bg-white px-3 py-1.5 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-rose-50 hover:ring-rose-300">🍇 葡萄（高濃度）加熱</button>
              </div>
              <p id="lab1-result" class="mt-2 rounded-xl bg-white/90 p-2.5 text-xs font-medium text-slate-700">點選上方任一組合，看看試管會發生什麼變化！</p>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // -------------------- 2-2 酵素 --------------------
  {
    id: "2-2-enzyme",
    chapter: "2-2",
    chapterLabel: "2-2 酵素",
    badgeColor: "bg-indigo-100 text-indigo-800",
    icon: "🔑",
    title: "酵素的特性與代謝作用（p.90–91, 98）",
    subtitle: "主要成分為蛋白質，具專一性、可重複使用，是生物體內的催化劑",
    defaultOpen: false,
    bodyHtml: `
      <div class="space-y-4">
        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4">
            <p class="text-sm font-black text-indigo-900">1. 代謝作用</p>
            <p class="mt-1 text-xs leading-relaxed text-slate-700">
              生物體內的<strong>分解作用</strong>（大分子→小分子）與<strong>合成作用</strong>（小分子→大分子）合稱代謝作用，都需要酵素參與。
            </p>
          </div>
          <div class="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4">
            <p class="text-sm font-black text-indigo-900">2. 可重複使用</p>
            <p class="mt-1 text-xs leading-relaxed text-slate-700">
              酵素是催化劑，能加快反應速率（不能引發新反應），且反應前、後本身不會改變，故可<strong>重複使用</strong>。
            </p>
          </div>
          <div class="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4">
            <p class="text-sm font-black text-indigo-900">3. 專一性（鑰匙與鎖）</p>
            <p class="mt-1 text-xs leading-relaxed text-slate-700">
              一種酵素只能催化特定反應，酵素與受質須配對正確。例如：唾液中的<strong>澱粉酶</strong>只能分解澱粉，無法分解纖維素。
            </p>
          </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <p class="font-bold text-slate-900">📌 酵素與成分的必考提醒</p>
          <ul class="mt-1.5 space-y-1">
            <li>• 大部分酵素的主要成分是<strong>蛋白質</strong>，但並非所有蛋白質都是酵素。</li>
            <li>• 只要環境條件適合，酵素在<strong>生物體內或體外</strong>皆可作用（例如料理用的嫩精含鳳梨酵素、木瓜酵素可軟化肉質）。</li>
            <li>• 牛、羊、鹿等草食性哺乳動物體內共生可分泌<strong>纖維素酶</strong>的微生物，因此可分解纖維素；人類體內沒有分解纖維素的酵素。</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: "2-2-factors",
    chapter: "2-2",
    chapterLabel: "2-2 酵素",
    badgeColor: "bg-indigo-100 text-indigo-800",
    icon: "🌡️",
    title: "影響酵素活性的因素 ＆ 實驗 2-2（p.92–95, 98）",
    subtitle: "溫度（高溫永久破壞 vs. 低溫可回復）與酸鹼性（中性、酸性、鹼性）",
    defaultOpen: false,
    bodyHtml: `
      <div class="space-y-4">
        <div class="table-wrap">
          <table class="study-table">
            <thead>
              <tr>
                <th class="w-28">影響因素</th>
                <th>講義核心重點</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-rose-700">溫度</td>
                <td>
                  1. 在適宜溫度範圍內，酵素活性隨溫度升高而增加（人體酵素約在 <strong>37℃</strong> 活性最高）。<br>
                  2. <strong>高溫</strong>：超過適宜溫度後（如超過 50℃），酵素構造被破壞而失去活性，且<strong>無法回復</strong>（如同煮熟的蛋白不能恢復）。<br>
                  3. <strong>低溫</strong>：酵素活性降低或較無作用，但<strong>不會被破壞</strong>，溫度回升後活性<strong>可慢慢回復</strong>。
                </td>
              </tr>
              <tr>
                <td class="font-bold text-purple-700">酸鹼性</td>
                <td>
                  1. 不同酵素適合作用的酸鹼性不同，處於不適合的環境下會變質失去活性。<br>
                  2. <strong>唾液中的酵素</strong>：適合<strong>中性</strong>環境。<br>
                  3. <strong>胃液中的酵素</strong>：適合<strong>酸性</strong>環境（若進入鹼性的小腸將失去活性）。<br>
                  4. <strong>小腸中的酵素</strong>：適合<strong>鹼性</strong>環境（若處於胃中酸性環境將失去活性）。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-950">
          <p class="font-black">🧪 實驗 2-2：溫度對唾液酵素活性的影響（p.93–95）</p>
          <p class="mt-1">• <strong>甲試管（煮沸過的唾液＋澱粉液）</strong>：放入 35～40℃ 溫水後，加本氏液隔水加熱 → 維持<strong>淡藍色</strong>（高溫破壞酵素，澱粉未被分解）。</p>
          <p class="mt-1">• <strong>乙試管（室溫唾液＋澱粉液）</strong>：放入 35～40℃ 溫水後，加本氏液隔水加熱 → 變成<strong>橙紅色</strong>（酵素將澱粉分解成小分子的<strong>麥芽糖</strong>）。</p>
        </div>

        <!-- 互動小實驗：酵素溫度活性滑桿 -->
        <div class="rounded-2xl border-2 border-dashed border-indigo-300 bg-indigo-50/40 p-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="text-sm font-black text-indigo-900">🎮 互動模擬：調整溫度，看看唾液澱粉酶的活性變化！</p>
            <span id="enzyme-temp-badge" class="rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-black text-white">目前溫度：37℃</span>
          </div>
          <div class="mt-4 space-y-3">
            <input
              id="enzyme-temp-slider"
              type="range"
              min="5"
              max="65"
              value="37"
              oninput="updateEnzymeSim(this.value)"
              class="w-full cursor-pointer accent-indigo-600"
            />
            <div class="flex justify-between text-xs font-bold text-slate-500">
              <span>❄️ 5℃（低溫）</span>
              <span>😊 37℃（人體適溫）</span>
              <span>🔥 65℃（高溫）</span>
            </div>
            <div class="flex flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm sm:flex-row">
              <div id="enzyme-icon" class="enzyme-active flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">🔑</div>
              <div class="w-full flex-1 space-y-1.5">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="text-slate-600">酵素活性</span>
                  <span id="enzyme-status-text" class="text-emerald-600">活性最高！快速分解澱粉 → 麥芽糖</span>
                </div>
                <div class="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  <div id="enzyme-activity-bar" class="h-full rounded-full bg-emerald-500 transition-all duration-300" style="width: 96%;"></div>
                </div>
                <p id="enzyme-note" class="text-xs text-slate-500">在適宜溫度（約 37℃）下，酵素與受質能順利結合並加快反應速率。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // -------------------- 2-3 植物如何獲得養分 --------------------
  {
    id: "2-3-leaf",
    chapter: "2-3",
    chapterLabel: "2-3 植物如何獲得養分",
    badgeColor: "bg-teal-100 text-teal-800",
    icon: "🍃",
    title: "葉的構造與功能（p.99–100）",
    subtitle: "只有「葉肉」與「保衛細胞」含有葉綠體，可行光合作用",
    defaultOpen: false,
    bodyHtml: `
      <div class="space-y-4">
        <p class="text-sm text-slate-600">植物的養分來源：<strong>根部</strong>從土壤吸收<strong>水和礦物質</strong>；<strong>葉</strong>行光合作用製造有機養分。</p>
        <div class="table-wrap">
          <table class="study-table">
            <thead>
              <tr>
                <th>葉片構造</th>
                <th class="w-24">葉綠體</th>
                <th>功能與特徵</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">角質層</td>
                <td><span class="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold">無</span></td>
                <td>位於表皮細胞外，透明無色，可<strong>防止水分散失</strong>。</td>
              </tr>
              <tr>
                <td class="font-bold">上、下表皮</td>
                <td><span class="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold">無</span></td>
                <td>細胞排列整齊且透明無色（利於光線穿透），具有<strong>保護功能</strong>，以免植物體受病菌感染。</td>
              </tr>
              <tr>
                <td class="font-bold text-emerald-700">葉肉</td>
                <td><span class="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">有</span></td>
                <td>含柵狀組織與海綿組織，是葉行<strong>光合作用的主要場所</strong>。</td>
              </tr>
              <tr>
                <td class="font-bold">葉脈（維管束）</td>
                <td><span class="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold">無</span></td>
                <td>由輸導組織組成：<strong>木質部</strong>運送無機養分（水、礦物質），<strong>韌皮部</strong>運送有機養分（如醣類）。</td>
              </tr>
              <tr>
                <td class="font-bold text-emerald-700">保衛細胞</td>
                <td><span class="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">有</span></td>
                <td>呈半月形、兩兩成對，散布於表皮細胞間，可控制<strong>氣孔</strong>的開閉。</td>
              </tr>
              <tr>
                <td class="font-bold">氣孔</td>
                <td>—</td>
                <td>氣體（<strong>氧氣、二氧化碳</strong>）進出與<strong>水分蒸散</strong>的通道（註：水分只能由根部吸收，不能由氣孔吸收）。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: "2-3-photosynthesis",
    chapter: "2-3",
    chapterLabel: "2-3 植物如何獲得養分",
    badgeColor: "bg-teal-100 text-teal-800",
    icon: "☀️",
    title: "光合作用兩階段 ＆ 實驗 2-3（p.101–104, 107）",
    subtitle: "主要目的是製造養分（葡萄糖），氧氣是副產物；水既是反應物也是產物",
    defaultOpen: false,
    bodyHtml: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-teal-200 bg-teal-50/70 p-4">
          <p class="text-sm font-black text-teal-900">🔄 光合作用總反應式（場所：葉綠體）</p>
          <p class="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-slate-800 shadow-sm">
            水（根部吸收） ＋ 二氧化碳（氣孔進入） —<span class="text-amber-600">(光能 / 葉綠體)</span>→ 氧氣 ＋ 葡萄糖 ＋ 水
          </p>
          <div class="mt-3 grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl bg-white p-3 text-xs text-slate-700">
              <p class="font-black text-amber-700">1. 光反應（先進行，於葉綠餅中）</p>
              <p class="mt-1">葉綠素等色素吸收光能，將<strong>水</strong>分解產生<strong>氧氣</strong>（由氣孔釋出）和<strong>能量</strong>。</p>
            </div>
            <div class="rounded-xl bg-white p-3 text-xs text-slate-700">
              <p class="font-black text-emerald-700">2. 碳反應（後進行，於基質中）</p>
              <p class="mt-1">利用光反應產生的能量與酵素作用，將<strong>二氧化碳</strong>轉換成<strong>葡萄糖</strong>和<strong>水</strong>。</p>
            </div>
          </div>
          <p class="mt-2 text-xs font-bold text-teal-800">
            ※ 葡萄糖可轉變為澱粉儲存；光合作用將光能轉變成化學能儲存於葡萄糖中，並穩定大氣中氧氣與二氧化碳濃度。
          </p>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 class="font-black text-slate-900">🧪 實驗 2-3：光合作用的探討（葉片鋁箔遮光實驗，p.103–104）</h4>
          <ol class="mt-2 space-y-1.5 text-sm text-slate-700">
            <li><strong>步驟 1（軟化）</strong>：葉片中段包鋁箔照光 5～7 天後摘下，放入<strong>沸水</strong>中煮沸數分鐘，使<strong>角質層軟化</strong>。</li>
            <li><strong>步驟 2（褪色）</strong>：將葉片放入<strong>酒精中隔水加熱</strong>，溶解出<strong>葉綠素</strong>（酒精易燃，不可直接加熱或加蓋）。葉片變黃白色，酒精變綠色。</li>
            <li><strong>步驟 3（漂洗）</strong>：用<strong>熱水漂洗</strong>葉片，洗去酒精與殘餘葉綠素。</li>
            <li><strong>步驟 4（檢測）</strong>：滴加<strong>碘液</strong> → <strong>未包鋁箔</strong>處呈<strong>藍黑色</strong>（有澱粉）；<strong>包鋁箔</strong>處呈<strong>黃褐色</strong>（無澱粉）。證明光合作用需要<strong>光照</strong>！</li>
          </ol>
        </div>

        <!-- 互動小實驗：光合作用光照切換器 -->
        <div class="rounded-2xl border-2 border-dashed border-teal-300 bg-teal-50/40 p-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="text-sm font-black text-teal-900">🎮 互動模擬：切換「照光」與「包鋁箔遮光」看看葉片變化！</p>
            <div class="flex gap-2">
              <button type="button" onclick="togglePhotoSim(true)" class="rounded-xl bg-amber-400 px-3 py-1 text-xs font-black text-amber-950 shadow-sm transition hover:bg-amber-300">☀️ 正常照光</button>
              <button type="button" onclick="togglePhotoSim(false)" class="rounded-xl bg-slate-700 px-3 py-1 text-xs font-black text-white shadow-sm transition hover:bg-slate-600">🪩 包上鋁箔遮光</button>
            </div>
          </div>
          <div id="photo-sim-stage" class="mt-3 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row">
            <div class="flex items-center gap-3">
              <span id="photo-sun" class="sun-glow text-4xl">☀️</span>
              <span id="photo-arrow-1" class="flow-arrow text-lg font-black text-amber-500">➜</span>
              <div id="photo-leaf-box" class="flex h-14 w-24 items-center justify-center rounded-2xl border-2 border-emerald-500 bg-emerald-100 text-2xl transition-all duration-500">
                🍃
              </div>
              <span id="photo-arrow-2" class="flow-arrow text-lg font-black text-emerald-500">➜</span>
              <div id="photo-output" class="text-xs font-bold text-emerald-800">
                <p>💨 釋出氧氣氣泡</p>
                <p>🍬 製造葡萄糖 → 澱粉</p>
              </div>
            </div>
            <div id="photo-iodine-badge" class="rounded-xl bg-slate-900 px-3 py-2 text-xs font-black text-white transition-colors duration-500">
              滴碘液結果：藍黑色（有澱粉）
            </div>
          </div>
        </div>
      </div>
    `
  },

  // -------------------- 2-4 動物如何獲得養分 --------------------
  {
    id: "2-4-digestion",
    chapter: "2-4",
    chapterLabel: "2-4 動物如何獲得養分",
    badgeColor: "bg-rose-100 text-rose-800",
    icon: "🍽️",
    title: "人體消化系統：消化道 ＆ 消化腺全比較（p.108–112, 116）",
    subtitle: "大分子須分解成小分子才能吸收；膽汁不含酵素；小腸負責主要消化與吸收",
    defaultOpen: false,
    bodyHtml: `
      <div class="space-y-4">
        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-rose-200 bg-rose-50/70 p-3.5 text-center">
            <p class="text-xs font-bold text-rose-700">澱粉（多醣）</p>
            <p class="mt-1 text-sm font-black text-slate-900">→ 葡萄糖</p>
            <p class="mt-1 text-xs text-slate-600">口腔初步（麥芽糖）→ 小腸完成</p>
          </div>
          <div class="rounded-2xl border border-rose-200 bg-rose-50/70 p-3.5 text-center">
            <p class="text-xs font-bold text-rose-700">蛋白質</p>
            <p class="mt-1 text-sm font-black text-slate-900">→ 胺基酸</p>
            <p class="mt-1 text-xs text-slate-600">胃初步（胜肽類）→ 小腸完成</p>
          </div>
          <div class="rounded-2xl border border-rose-200 bg-rose-50/70 p-3.5 text-center">
            <p class="text-xs font-bold text-rose-700">脂質</p>
            <p class="mt-1 text-sm font-black text-slate-900">→ 脂肪酸＋甘油</p>
            <p class="mt-1 text-xs text-slate-600">只在水解場所「小腸」進行</p>
          </div>
        </div>

        <div class="table-wrap">
          <table class="study-table">
            <thead>
              <tr>
                <th>消化器官</th>
                <th>消化腺／消化液</th>
                <th>酸鹼性</th>
                <th>作用養分與重點</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">口腔</td>
                <td>唾腺 → 唾液（含澱粉酶）</td>
                <td>中性</td>
                <td>初步分解<strong>澱粉</strong>（或肝糖）為<strong>麥芽糖</strong>；牙齒咀嚼、舌頭混合。</td>
              </tr>
              <tr>
                <td class="font-bold">咽、食道</td>
                <td>無</td>
                <td>—</td>
                <td>咽控制食物進入食道；食道藉管壁<strong>蠕動</strong>推進食物（不分泌消化液）。</td>
              </tr>
              <tr>
                <td class="font-bold">胃</td>
                <td>胃腺 → 胃液（含鹽酸、蛋白酶）</td>
                <td>酸性</td>
                <td>鹽酸具殺菌及活化酵素作用；蛋白酶初步分解<strong>蛋白質</strong>為胜肽類。</td>
              </tr>
              <tr>
                <td class="font-bold text-rose-700">小腸</td>
                <td>
                  1. 肝臟 → 膽汁（存於膽囊）<br>
                  2. 胰臟 → 胰液<br>
                  3. 腸腺 → 腸液
                </td>
                <td>鹼性</td>
                <td>
                  • <strong>膽汁不含酵素</strong>，僅將脂質<strong>乳化</strong>成小顆脂肪球。<br>
                  • <strong>胰液</strong>含酵素可分解<strong>醣類、蛋白質、脂質</strong>。<br>
                  • <strong>腸液</strong>可將麥芽糖分解為葡萄糖、胜肽類分解為胺基酸。<br>
                  • 內壁有<strong>環狀皺褶和絨毛</strong>，增加吸收表面積，吸收大部分養分與水分。
                </td>
              </tr>
              <tr>
                <td class="font-bold">大腸、肛門</td>
                <td>無</td>
                <td>—</td>
                <td>大腸吸收剩餘水分（不分泌消化液），形成糞便由肛門排出。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <p class="font-black">⚠️ 觀念掃描易錯陷阱提醒（p.112）</p>
          <ul class="mt-1.5 space-y-1">
            <li>• <strong>肝臟</strong>分泌膽汁屬於消化腺；<strong>膽囊</strong>僅儲存膽汁，<strong>不屬於</strong>消化腺。</li>
            <li>• 消化道順序：<strong>口腔 → 咽 → 食道 → 胃 → 小腸 → 大腸 → 肛門</strong>（肝臟、膽囊、胰臟不屬於消化道）。</li>
            <li>• 小腸絨毛內的<strong>微血管</strong>運送水溶性養分（葡萄糖、胺基酸）；<strong>乳糜管</strong>運送脂溶性養分（甘油、脂肪酸）。</li>
          </ul>
        </div>
      </div>
    `
  }
];

// ============================================================
// 互動測驗題庫（共 8 題，100% 源自講義觀念掃描、實驗題、學力測驗與總複習）
// ============================================================
const quizQuestions = [
  {
    section: "2-1 食物中的養分",
    type: "是非題",
    question: "食物中的各種養分主要分為六大養分，這六大養分都能在人體內產生能量。",
    options: ["○（對）", "×（錯）"],
    correctIndex: 1,
    explanation: "六大養分中，只有「醣類、蛋白質、脂質」可產生能量；「水、維生素、礦物質」不能產生能量喔！"
  },
  {
    section: "2-1 食物中的養分",
    type: "選擇題",
    question: "阿威買了一支捲筒冰淇淋（每份 100 公克），營養成分標示為：蛋白質 5 公克、脂質 25 公克、醣類 30 公克、鈉 50 毫克（已知成分中不含纖維素）。請問這份冰淇淋可以產生多少熱量？",
    options: ["(A) 265 大卡", "(B) 365 大卡", "(C) 415 大卡", "(D) 465 大卡"],
    correctIndex: 1,
    explanation: "蛋白質與醣類每公克提供 4 大卡，脂質每公克提供 9 大卡，鈉不能產生熱量。計算：(5＋30)×4 ＋ 25×9 ＝ 140 ＋ 225 ＝ 365 大卡。"
  },
  {
    section: "2-1 食物中的養分",
    type: "選擇題",
    question: "關於「食物中醣類的測定」實驗，下列敘述何者正確？",
    options: [
      "(A) 碘液原本為淡藍色，遇澱粉會變成黃褐色",
      "(B) 本氏液原本為淡藍色，與含葡萄糖溶液隔水加熱後會依濃度由低到高呈現綠、黃、橙或紅色",
      "(C) 本氏液不需加熱即可檢測葡萄糖，顏色越偏綠色表示濃度越高",
      "(D) 碘液可用來檢測食物中是否含有葡萄糖"
    ],
    correctIndex: 1,
    explanation: "碘液原本為黃褐色，遇澱粉變藍黑色（或紫紅色）；本氏液原本為淡藍色，檢測葡萄糖需要隔水加熱，顏色越偏紅色代表葡萄糖濃度越高。"
  },
  {
    section: "2-2 酵素",
    type: "選擇題",
    question: "關於人體內「酵素」的特性與影響因素，下列敘述何者正確？",
    options: [
      "(A) 酵素參與反應一次後即失效，不能重複使用",
      "(B) 溫度過高或過低，都會使酵素永久失去活性且無法回復",
      "(C) 胃液中的酵素到了鹼性的小腸中將失去活性",
      "(D) 人體內具有可分解纖維素的酵素"
    ],
    correctIndex: 2,
    explanation: "胃液酵素適合在酸性環境中作用，到達鹼性的小腸後會失去活性。另外：酵素可重複使用；低溫回溫後可回復活性；人體沒有可分解纖維素的酵素。"
  },
  {
    section: "2-3 植物如何獲得養分",
    type: "是非題",
    question: "植物行光合作用的主要目的，是為了製造氧氣以提供給其他生物呼吸。",
    options: ["○（對）", "×（錯）"],
    correctIndex: 1,
    explanation: "植物行光合作用的主要目的是「製造養分（葡萄糖）供本身利用」，氧氣只是過程中的副產物。"
  },
  {
    section: "2-3 植物如何獲得養分",
    type: "選擇題",
    question: "進行「光合作用的探討」葉片澱粉檢測實驗時，正確的實驗步驟先後順序為何？（甲.熱水漂洗葉片、乙.放入酒精中隔水加熱去除葉綠素、丙.滴加碘液、丁.放入沸水中軟化葉片）",
    options: [
      "(A) 甲 → 乙 → 丁 → 丙",
      "(B) 乙 → 丁 → 甲 → 丙",
      "(C) 丁 → 甲 → 乙 → 丙",
      "(D) 丁 → 乙 → 甲 → 丙"
    ],
    correctIndex: 3,
    explanation: "正確順序為：先放入沸水中軟化角質層（丁）→ 放入酒精中隔水加熱去除葉綠素（乙）→ 用熱水漂洗葉片（甲）→ 最後滴加碘液檢測澱粉（丙）。"
  },
  {
    section: "2-4 動物如何獲得養分",
    type: "是非題",
    question: "人體分泌的消化液都含有消化酵素；而且分泌膽汁的肝臟與儲存膽汁的膽囊，都屬於消化腺。",
    options: ["○（對）", "×（錯）"],
    correctIndex: 1,
    explanation: "肝臟分泌的「膽汁不含消化酵素」（只負責乳化脂質）；此外，肝臟屬於消化腺，但「膽囊」只是儲存膽汁的構造，不屬於消化腺。"
  },
  {
    section: "2-4 動物如何獲得養分",
    type: "選擇題",
    question: "在人體的消化道中，哪一個部位能同時進行分解醣類、蛋白質和脂質的作用，並且也是吸收大部分養分與水分的主要場所？",
    options: ["(A) 口腔", "(B) 胃", "(C) 小腸", "(D) 大腸"],
    correctIndex: 2,
    explanation: "小腸中有肝臟分泌的膽汁、胰臟分泌的胰液與腸腺分泌的腸液，能同時處理醣類、蛋白質和脂質的消化，且小腸壁上的皺褶與絨毛是吸收養分與水分的主要場所。"
  }
];

const praiseMessages = [
  "太棒了！完全答對，觀念超級清楚！",
  "答對囉！你的自然科學頭腦很讚喔！",
  "賓果！這題難不倒你，繼續保持！",
  "太神啦！講義重點都有記到心坎裡！"
];

const encourageMessages = [
  "沒關係，再試一次，你可以的！看看解析就能記起來囉：",
  "差一點點就對了！別灰心，一起看看正確觀念：",
  "這題很容易掉進陷阱，看完提示下次一定不會錯！"
];

// ============================================================
// DOM 元素與狀態管理
// ============================================================
const navTabs = document.querySelectorAll(".nav-tab");
const studySection = document.getElementById("study-section");
const quizSection = document.getElementById("quiz-section");
const studyCardsContainer = document.getElementById("study-cards-container");
const filterPills = document.querySelectorAll(".filter-pill");
const expandAllBtn = document.getElementById("expand-all-btn");
const collapseAllBtn = document.getElementById("collapse-all-btn");
const goToQuizBtn = document.getElementById("go-to-quiz-btn");

// 測驗相關元素
const quizCard = document.getElementById("quiz-card");
const quizSummary = document.getElementById("quiz-summary");
const quizProgressText = document.getElementById("quiz-progress-text");
const quizProgressBar = document.getElementById("quiz-progress-bar");
const quizScoreLive = document.getElementById("quiz-score-live");
const qBadgeSection = document.getElementById("q-badge-section");
const qBadgeType = document.getElementById("q-badge-type");
const qQuestionText = document.getElementById("q-question-text");
const qOptionsContainer = document.getElementById("q-options-container");
const qFeedback = document.getElementById("q-feedback");
const qFeedbackIcon = document.getElementById("q-feedback-icon");
const qFeedbackTitle = document.getElementById("q-feedback-title");
const qFeedbackExplanation = document.getElementById("q-feedback-explanation");
const qNextBtn = document.getElementById("q-next-btn");
const retryQuizBtn = document.getElementById("retry-quiz-btn");
const backToStudyBtn = document.getElementById("back-to-study-btn");

let currentChapterFilter = "all";
let currentQuestionIdx = 0;
let correctCount = 0;
let userAnswers = [];

// ============================================================
// 導覽列切換（SPA 分頁）
// ============================================================
function switchMainTab(targetId) {
  navTabs.forEach((tab) => {
    const isActive = tab.dataset.target === targetId;
    tab.classList.toggle("active", isActive);
  });

  if (targetId === "study-section") {
    studySection.classList.remove("hidden");
    quizSection.classList.add("hidden");
  } else {
    studySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchMainTab(tab.dataset.target));
});

goToQuizBtn.addEventListener("click", () => switchMainTab("quiz-section"));
backToStudyBtn.addEventListener("click", () => switchMainTab("study-section"));

// ============================================================
// 重點觀念吸收區：渲染知識卡片與手風琴互動
// ============================================================
function renderStudyCards(filterChapter = "all") {
  const filtered =
    filterChapter === "all"
      ? studyData
      : studyData.filter((item) => item.chapter === filterChapter);

  studyCardsContainer.innerHTML = "";

  filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `accordion-item card-enter overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-300 ${
      item.defaultOpen || filterChapter !== "all" ? "open" : ""
    }`;
    card.style.animationDelay = `${index * 60}ms`;

    card.innerHTML = `
      <button
        type="button"
        class="accordion-trigger flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50/80 sm:p-6"
        aria-expanded="${item.defaultOpen || filterChapter !== "all"}"
      >
        <div class="flex items-start gap-3.5 sm:items-center">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
            ${item.icon}
          </div>
          <div>
            <span class="inline-block rounded-lg px-2 py-0.5 text-xs font-bold ${item.badgeColor}">
              ${item.chapterLabel}
            </span>
            <h3 class="mt-1 text-base font-black text-slate-900 sm:text-lg">${item.title}</h3>
            <p class="mt-0.5 text-xs text-slate-500 sm:text-sm">${item.subtitle}</p>
          </div>
        </div>
        <svg class="accordion-chevron h-5 w-5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="accordion-content border-t border-slate-100 p-5 sm:p-6">
        ${item.bodyHtml}
      </div>
    `;

    const trigger = card.querySelector(".accordion-trigger");
    trigger.addEventListener("click", () => {
      const isOpen = card.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });

    studyCardsContainer.appendChild(card);
  });
}

filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    currentChapterFilter = pill.dataset.chapter;
    filterPills.forEach((p) => p.classList.toggle("active", p === pill));
    renderStudyCards(currentChapterFilter);
  });
});

expandAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.classList.add("open");
    item.querySelector(".accordion-trigger").setAttribute("aria-expanded", "true");
  });
});

collapseAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.classList.remove("open");
    item.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
  });
});

// ============================================================
// 互動測驗挑戰區
// ============================================================
function initQuiz() {
  currentQuestionIdx = 0;
  correctCount = 0;
  userAnswers = [];
  quizCard.classList.remove("hidden");
  quizSummary.classList.add("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentQuestionIdx];
  const total = quizQuestions.length;

  quizProgressText.textContent = `${currentQuestionIdx + 1} / ${total}`;
  quizProgressBar.style.width = `${((currentQuestionIdx + 1) / total) * 100}%`;
  quizScoreLive.textContent = String(Math.round((correctCount / total) * 100));

  qBadgeSection.textContent = q.section;
  qBadgeType.textContent = q.type;
  qQuestionText.textContent = `${currentQuestionIdx + 1}. ${q.question}`;

  // 重置回饋與按鈕
  qFeedback.classList.add("hidden");
  qFeedback.className = "mt-6 hidden rounded-2xl border p-4 transition-all";
  qNextBtn.classList.add("hidden");
  qNextBtn.textContent = currentQuestionIdx === total - 1 ? "查看總結分數 🎉" : "下一題 →";

  qOptionsContainer.innerHTML = "";
  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.innerHTML = `<span class="flex-1">${optText}</span>`;
    btn.addEventListener("click", () => handleSelectOption(idx));
    qOptionsContainer.appendChild(btn);
  });
}

function handleSelectOption(selectedIdx) {
  const q = quizQuestions[currentQuestionIdx];
  const isCorrect = selectedIdx === q.correctIndex;
  const optionButtons = qOptionsContainer.querySelectorAll(".quiz-option");

  if (isCorrect) {
    correctCount += 1;
  }

  userAnswers.push({
    question: q.question,
    section: q.section,
    selectedText: q.options[selectedIdx],
    correctText: q.options[q.correctIndex],
    isCorrect,
    explanation: q.explanation
  });

  // 更新選項視覺狀態
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
      btn.innerHTML += `<span class="text-base font-black text-emerald-600">✓</span>`;
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add("wrong");
      btn.innerHTML += `<span class="text-base font-black text-rose-600">✕</span>`;
    } else {
      btn.classList.add("dimmed");
    }
  });

  // 更新即時分數與回饋訊息
  const total = quizQuestions.length;
  quizScoreLive.textContent = String(Math.round((correctCount / total) * 100));

  qFeedback.classList.remove("hidden");
  if (isCorrect) {
    qFeedback.classList.add("border-emerald-200", "bg-emerald-50", "text-emerald-900");
    qFeedbackIcon.textContent = "🎉";
    qFeedbackTitle.textContent = praiseMessages[currentQuestionIdx % praiseMessages.length];
    launchConfetti(16);
  } else {
    qFeedback.classList.add("border-rose-200", "bg-rose-50", "text-rose-900");
    qFeedbackIcon.textContent = "💡";
    qFeedbackTitle.textContent = encourageMessages[currentQuestionIdx % encourageMessages.length];
  }
  qFeedbackExplanation.textContent = `【正確答案：${q.options[q.correctIndex]}】${q.explanation}`;

  qNextBtn.classList.remove("hidden");
}

qNextBtn.addEventListener("click", () => {
  if (currentQuestionIdx < quizQuestions.length - 1) {
    currentQuestionIdx += 1;
    renderQuestion();
  } else {
    showSummary();
  }
});

function showSummary() {
  quizCard.classList.add("hidden");
  quizSummary.classList.remove("hidden");

  const total = quizQuestions.length;
  const finalScore = Math.round((correctCount / total) * 100);

  document.getElementById("summary-total").textContent = String(total);
  document.getElementById("summary-correct").textContent = String(correctCount);
  document.getElementById("summary-score").textContent = `${finalScore} 分`;

  const emojiEl = document.getElementById("summary-emoji");
  const msgEl = document.getElementById("summary-message");

  if (finalScore === 100) {
    emojiEl.textContent = "🏆";
    msgEl.textContent = "太強了！滿分通關！第 2 章的養分觀念你已經完全掌握囉！";
    launchConfetti(55);
  } else if (finalScore >= 75) {
    emojiEl.textContent = "🎉";
    msgEl.textContent = "表現很棒喔！只差一點點就滿分了，把錯題再瞄一眼就無敵啦！";
    launchConfetti(35);
  } else if (finalScore >= 50) {
    emojiEl.textContent = "💪";
    msgEl.textContent = "不錯的開始！建議回到「重點觀念吸收區」複習一下實驗與表格，再挑戰一次一定更高分！";
  } else {
    emojiEl.textContent = "🌱";
    msgEl.textContent = "別灰心，學習就是從錯誤中成長！先去「重點觀念吸收區」充個電，再回來挑戰吧！";
  }

  const reviewContainer = document.getElementById("summary-review");
  reviewContainer.innerHTML = `<h4 class="text-sm font-black text-slate-700">📋 作答回顧與解析</h4>`;

  userAnswers.forEach((ans, idx) => {
    const item = document.createElement("div");
    item.className = `rounded-2xl border p-4 text-sm ${
      ans.isCorrect ? "border-emerald-200 bg-emerald-50/50" : "border-rose-200 bg-rose-50/50"
    }`;
    item.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <p class="font-bold text-slate-900">${idx + 1}. ${ans.question}</p>
        <span class="shrink-0 rounded-lg px-2 py-0.5 text-xs font-black ${
          ans.isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
        }">${ans.isCorrect ? "答對" : "答錯"}</span>
      </div>
      <p class="mt-1.5 text-xs text-slate-600">
        你的作答：<strong>${ans.selectedText}</strong> ｜ 正確答案：<strong class="text-emerald-700">${ans.correctText}</strong>
      </p>
      <p class="mt-1 text-xs leading-relaxed text-slate-700">${ans.explanation}</p>
    `;
    reviewContainer.appendChild(item);
  });
}

// ============================================================
// 互動小實驗與動畫特效
// ============================================================
function runSugarLab(mode) {
  const liquid = document.getElementById("lab1-liquid");
  const bubbles = document.getElementById("lab1-bubbles");
  const label = document.getElementById("lab1-tube-label");
  const result = document.getElementById("lab1-result");
  if (!liquid) return;

  const configs = {
    "iodine-rice": {
      color: "#1e1b4b",
      heating: false,
      label: "藍黑色（含澱粉）",
      text: "熟米飯富含「澱粉」，滴入黃褐色碘液後會立刻變成藍黑色！"
    },
    "iodine-water": {
      color: "#b45309",
      heating: false,
      label: "黃褐色（無澱粉）",
      text: "水是對照組、不含澱粉，滴入碘液後仍維持原本的黃褐色。"
    },
    "benedict-water": {
      color: "#38bdf8",
      heating: true,
      label: "淡藍色（無葡萄糖）",
      text: "水不含葡萄糖，加入本氏液隔水加熱後依然維持淡藍色。"
    },
    "benedict-low": {
      color: "#eab308",
      heating: true,
      label: "黃色（低～中濃度葡萄糖）",
      text: "芭樂含有葡萄糖，加入本氏液隔水加熱後，由淡藍色轉變成綠色或黃色！"
    },
    "benedict-high": {
      color: "#dc2626",
      heating: true,
      label: "紅色（高濃度葡萄糖）",
      text: "葡萄含糖量較高，隔水加熱後呈橙色或紅色——顏色越偏紅，代表葡萄糖濃度越高！"
    }
  };

  const cfg = configs[mode];
  if (!cfg) return;
  liquid.style.backgroundColor = cfg.color;
  bubbles.classList.toggle("hidden", !cfg.heating);
  label.textContent = cfg.label;
  result.textContent = cfg.text;
}

function updateEnzymeSim(tempVal) {
  const temp = Number(tempVal);
  const badge = document.getElementById("enzyme-temp-badge");
  const icon = document.getElementById("enzyme-icon");
  const status = document.getElementById("enzyme-status-text");
  const bar = document.getElementById("enzyme-activity-bar");
  const note = document.getElementById("enzyme-note");
  if (!badge) return;

  badge.textContent = `目前溫度：${temp}℃`;

  if (temp >= 55) {
    bar.style.width = "0%";
    bar.className = "h-full rounded-full bg-rose-500 transition-all duration-300";
    icon.textContent = "💥";
    icon.classList.remove("enzyme-active");
    status.textContent = "永久失去活性！無法回復";
    status.className = "text-rose-600";
    note.textContent = "高溫會破壞酵素（蛋白質）的構造，即使降溫也無法回復活性！";
  } else if (temp < 20) {
    const pct = Math.max(10, Math.round((temp / 37) * 45));
    bar.style.width = `${pct}%`;
    bar.className = "h-full rounded-full bg-sky-400 transition-all duration-300";
    icon.textContent = "❄️";
    icon.classList.add("enzyme-active");
    icon.style.setProperty("--pulse-speed", "2.4s");
    status.textContent = "低溫活性較低（回溫後可回復）";
    status.className = "text-sky-600";
    note.textContent = "低溫下酵素較無催化作用，但不會被破壞，溫度回升後活性可慢慢恢復。";
  } else if (temp <= 42) {
    const dist = Math.abs(temp - 37);
    const pct = Math.max(70, 98 - dist * 3);
    bar.style.width = `${pct}%`;
    bar.className = "h-full rounded-full bg-emerald-500 transition-all duration-300";
    icon.textContent = "🔑";
    icon.classList.add("enzyme-active");
    icon.style.setProperty("--pulse-speed", "0.7s");
    status.textContent = "活性極佳！快速分解澱粉 → 麥芽糖";
    status.className = "text-emerald-600";
    note.textContent = "接近人體適宜溫度（約 37℃），酵素與受質能順利結合並加快反應速率！";
  } else {
    const pct = Math.max(15, Math.round(((55 - temp) / 13) * 65));
    bar.style.width = `${pct}%`;
    bar.className = "h-full rounded-full bg-amber-500 transition-all duration-300";
    icon.textContent = "⚠️";
    icon.classList.add("enzyme-active");
    icon.style.setProperty("--pulse-speed", "1.6s");
    status.textContent = "超過適宜溫度，活性開始下降";
    status.className = "text-amber-600";
    note.textContent = "溫度繼續升高超過 50～55℃ 時，酵素就會逐漸被破壞而失去活性。";
  }
}

function togglePhotoSim(hasLight) {
  const sun = document.getElementById("photo-sun");
  const arrow1 = document.getElementById("photo-arrow-1");
  const arrow2 = document.getElementById("photo-arrow-2");
  const leafBox = document.getElementById("photo-leaf-box");
  const output = document.getElementById("photo-output");
  const badge = document.getElementById("photo-iodine-badge");
  if (!sun) return;

  if (hasLight) {
    sun.textContent = "☀️";
    sun.classList.add("sun-glow");
    arrow1.style.visibility = "visible";
    arrow2.style.visibility = "visible";
    leafBox.className = "flex h-14 w-24 items-center justify-center rounded-2xl border-2 border-emerald-500 bg-emerald-100 text-2xl transition-all duration-500";
    leafBox.textContent = "🍃";
    output.innerHTML = `<p>💨 釋出氧氣氣泡</p><p>🍬 製造葡萄糖 → 澱粉</p>`;
    output.className = "text-xs font-bold text-emerald-800";
    badge.className = "rounded-xl bg-slate-900 px-3 py-2 text-xs font-black text-white transition-colors duration-500";
    badge.textContent = "滴碘液結果：藍黑色（有澱粉）";
  } else {
    sun.textContent = "☁️";
    sun.classList.remove("sun-glow");
    arrow1.style.visibility = "hidden";
    arrow2.style.visibility = "hidden";
    leafBox.className = "flex h-14 w-24 items-center justify-center rounded-2xl border-2 border-slate-400 bg-slate-200 text-xs font-black text-slate-700 transition-all duration-500";
    leafBox.textContent = "鋁箔遮光中";
    output.innerHTML = `<p>⏸️ 無法進行光合作用</p><p>❌ 沒有製造澱粉</p>`;
    output.className = "text-xs font-bold text-slate-500";
    badge.className = "rounded-xl bg-amber-600 px-3 py-2 text-xs font-black text-white transition-colors duration-500";
    badge.textContent = "滴碘液結果：黃褐色（無澱粉）";
  }
}

function launchConfetti(count = 24) {
  const colors = ["#10b981", "#f59e0b", "#3b82f6", "#ec4899", "#8b5cf6"];
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.width = `${6 + Math.random() * 6}px`;
    piece.style.height = `${8 + Math.random() * 8}px`;
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.setProperty("--fall-duration", `${1.6 + Math.random() * 1.4}s`);
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

retryQuizBtn.addEventListener("click", initQuiz);

// 初始化頁面
renderStudyCards("all");
initQuiz();
