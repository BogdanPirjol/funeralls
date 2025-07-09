export default function ContractPreview() {
  const contractData = localStorage.getItem("contract-data");

  const parsedData = JSON.parse(contractData);
  console.log(parsedData);

  const {
    beneficiar,
    reprezentantLegal,
    comisionIntermediar,
    produseSiServicii,
    termenOnorareContract,
    comisionPublicitate,
    comisionPlatforma,
    durataContract,
    termenIncasareComision,
    pretSiModalitatiDePlata,
  } = parsedData;

  function renderReprezentantiLegal(repLegArr) {
    return repLegArr.map((repLegal, index, arr) => {
      return (
        <>
          <span>reprezentata legal de </span>
          <div className="flex flex-col items-end">
            <div className="flex flex-col">
              <span>
                {repLegal.titulatura} {repLegal.nume}
              </span>
              <span>în calitate de: {repLegal.calitate}</span>
              <span>
                identificat(ă) prin: {repLegal.tipDoc || "-"} seria{" "}
                {repLegal.serie || "-"} numar {repLegal.numar}
              </span>
              <span>
                Telefon {repLegal.telefon || "-"} email {repLegal.email || "-"}
              </span>
              <span>identificat(ă) prin: CNP {repLegal.CNP}</span>
            </div>
            {index + 1 < arr.length && (
              <div className="flex self-start">
                <span>și</span>
              </div>
            )}
          </div>
        </>
      );
    });
  }

  function renderProduseSiServicii(produseSiServicii) {
    return produseSiServicii?.map((item) => {
      return (
        <div className="flex gap-x-2">
          <span>-</span>
          <span>{item.denumire}</span>
          <span>{item.descriere}</span>
        </div>
      );
    });
  }

  return (
    <div className="px-24 py-10 font-serif max-w-[900px] m-auto border-slate-400 shadow-md mt-10 mb-10">
      <div className="flex flex-col items-center p-10">
        {/* titlu contract */}
        <div className="flex flex-col items-center gap-y-3">
          <span className="uppercase text-2xl font-semibold">
            contract de intermediere
          </span>
          <span className="uppercase text-xl font-semibold text-center">
            -promovare, vânzare produse și servicii funerare on-line-
          </span>
          <span className="font-semibold text-center">
            Nr. înregistrare_________/_________
          </span>
        </div>
      </div>
      {/* cap I */}
      <div className="flex flex-col gap-y-4">
        {/* titlu capitol */}
        <div className="flex flex-col gap-y-3">
          <span className="text-xl uppercase font-semibold">
            cap. i părtile contractante
          </span>
          <span>Art. 1 Intermediarul si Beneficiarul</span>
        </div>
        {/* intermediar */}
        <div className="flex gap-x-8 ">
          <div>
            <span>(1)</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">
              Societatea {beneficiar.societate || "-"},
            </span>
            <span className="font-semibold">
              Sediul {beneficiar.sediu || "-"},
            </span>
            <span className="font-semibold">
              Înmatriculare la Oficiul Registrul Comertului{" "}
              {beneficiar["Inmatriculare la Registrul Comertului"] || "-"},
            </span>
            <span className="font-semibold">
              Cod Unic de Înregistrare/Cod Fiscal {beneficiar.CUI || "-"},
            </span>
            <span className="font-semibold">
              Cont bancar nr. {beneficiar["Cont Bancar"] || "-"},
            </span>
            <span className="font-semibold">
              Banca {beneficiar.banca || "-"},
            </span>
            <span className="font-semibold">
              Sucursala {beneficiar.sucursala || "-"},
            </span>
            <span className="font-semibold">
              Telefon {beneficiar.telefon || "-"},
            </span>
            <span className="font-semibold">
              email {beneficiar.email || "-"},
            </span>
            {renderReprezentantiLegal(reprezentantLegal)}
            <span className="pt-5">
              în calitate de <b className="uppercase">intermediar</b>, denumită
              în continuare în prezentul contract <b>Intermediar</b>, și
            </span>
          </div>
        </div>

        {/* beneficiar */}
        <div className="flex gap-x-8 ">
          <div>
            <span>(2)</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Societatea -,</span>
            <span className="font-semibold">Sediul -,</span>
            <span className="font-semibold">
              Înmatriculare la Oficiul Registrul Comertului -,
            </span>
            <span className="font-semibold">
              Cod Unic de Înregistrare/Cod Fiscal -,
            </span>
            <span className="font-semibold">Cont bancar nr. -,</span>
            <span className="font-semibold">Banca -,</span>
            <span className="font-semibold">Sucursala -,</span>
            <span className="font-semibold">Telefon -,</span>
            <span className="font-semibold">email -,</span>
            {/* {renderReprezentantiLegal(reprezentantLegal)} */}
            <span className="pt-5">
              în calitate de <b className="uppercase">beneficiar</b>, denumită
              în continuare în prezentul contract <b>Beneficiar</b>, având ca
              temei legal legislația română în materie în vigoare, au convenit
              încheierea prezentului contract, cu respectarea următoarelor
              clauze:
            </span>
          </div>
        </div>
      </div>
      {/* cap II */}
      <div className="flex flex-col gap-y-4 mt-10">
        {/* titlu */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP.II OBIECTUL CONTRACTULUI
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.2 Definirea obiectului contractului. Mențiuni
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              <b>Beneficiarul</b> își poate alege modul de promovare, expunere
              și vânzare prin platforma{" "}
              <p className="text-blue-700 inline underline">
                www.funeralls.com
              </p>{" "}
              alegând funcție de posibilitățile materiale, umane sau de
              logistică un tip de Abonament care să-i satisfacă
              cerințele.Intermediarul va pune la dispoziția Beneficiarului odată
              cu acest contract Anexa nr.4 - Abonamente din care Beneficiarul va
              alege. Alegerea unui tip de Abonament cu facilitățile prevăzute se
              va face la semnarea contractului de către Beneficiar.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Beneficiarul comercializează produsele și/sau serviciile
              menționate în <b>Anexa nr.1</b> la prezentul contract, ce face
              parte integrantă din acesta, denumite generic în prezentul
              contract
              <b>“bunuri”</b>. Obiectul prezentului contract îl constituie
              <b> identificarea de către Intermediar a unor cumpărători</b>{" "}
              pentru bunurile comercializate de Beneficiar, în schimbul
              achitării de către Beneficiar, Intermediarului, a unui preț,
              denumit <b>comision</b>.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Beneficiarul va pune la dispoziția Intermediarului{" "}
              <b>oferta fermă, completă și precisă</b> a bunurilor pe care le
              comercializează, cu descrierea caracteristicilor, a calității,
              termenului de garanție și a prețului, declarând că este în măsură
              să o onoreze prompt și complet. Oferta fermă se va constitui în
              <b> Anexa nr.1</b> la prezentul contract, ce face parte integrantă
              din acesta. In orice conditii, Beneficiarul va respecta Termenii
              si Conditiile care fac parte integranta din acest Contract asa
              dupa cum sunt prezentati la <b>Anexa nr.2</b> .
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              Beneficiarul va încheia ulterior, contract de vânzare cu fiecare
              din persoanele fizice sau juridice identificate de Intermediar, în
              baza contractelor proprii ale Beneficiarului, la prețul și în
              condițiile stipulate în acestea.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              Bunurile sunt și vor rămâne proprietatea Beneficiarului până la
              perfectarea vânzării și transmiterii acestora în proprietatea
              cumpărătorului. Părțile contractante convin următoarele:
            </span>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                Intermediarul identifică doar cumpărătorul pentru bunurile
                Beneficiarului, urmând ca ulterior să se încheie contract de
                vânzare între Beneficiar și cumpărător;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                Intermediarul este îndreptățit ca la fiecare vânzare de servicii
                sau produse de către Beneficiar să solicite și să primească un
                comision în valoare de{" "}
                {comisionIntermediar?.value
                  ? `${comisionIntermediar?.value}% `
                  : "_____% "}
                din valoarea totală a Contractului pe care Beneficiarul în
                remite cumpărătorului.
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(6)</span>
          </div>
          <div>
            <span>
              Intermediarul va aduce la cunoștința terților cumpărători
              calitatea sa de intermediar și limitele împuternicirii date.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(7)</span>
          </div>
          <div>
            <span>
              Trecerea de la un tip de Abonament la altul se poate face în
              interiorul perioadei contractuale fără ca acest lucru să presupună
              rezilierea contractului ci o noua perioadă de contractare.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.3 Teritoriul. Exclusivitatea
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Intermediarul va identifica cumpărătorii pentru bunurile
              Beneficiarului în cadrul Teritoriului contractual delimitat
              astfel: - limitarea geografică sau teritorială tinând cont de
              specificul activitășii este cea oferită de limitele de județ
              (regiune).
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Intermedierea se face prin intermediul site-ului (platformei
              informatice){" "}
              <p className="inline text-blue-700 underline">
                www.funeralls.com
              </p>{" "}
              . Platforma informatică este proprietatea Intermediarului și este
              destinată efectuării de tranzacții comerciale prin intermediul ei.
              Intermediarul nu are și nici nu intenționează să aibă puncte de
              lucru de nivel fizic (depozite). Intermediarul se obligă să pună
              la dispoziția Beneficiarului platforma în vederea introducerii
              datelor în Termenii și Condițiile prezentate în platformă.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>Conform voinței părților:</span>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                Intermediarul se obligă să promoveze produsele și serviciile
                Beneficiarului în Teritoriul contractual;
              </span>
            </div>
            <div className="flex gap-x-3 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span>
                  Intermediarul se obligă să acorde exclusivitate Beneficiarului
                  în Teritoriul contractual numai în ceea ce privește
                  intermedierea vânzării următoarelor produse și servicii:
                  <div className="flex flex-col">
                    {renderProduseSiServicii(produseSiServicii)}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              Nerespectarea dispozițiilor prevăzute în alineatele precedente, dă
              dreptul Beneficiarului la rezilierea prezentului contract.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.4 Modul de îndeplinire a obiectului. Desfășurarea contractului
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              În vederea îndeplinirii serviciilor la care s-a obligat prin
              prezentul contract, <b>Intermediarul</b> va dispune de{" "}
              <b>independență</b>, acționând conform strategiei sale și nu celei
              impuse de Beneficiar.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Beneficiarul va putea pune la dispoziția Intermediarului{" "}
              <b>mostre informatice (poze, cataloage,etc…)</b> privitoare la
              bunurile și serviciile ce fac obiectul contractului, cataloage,
              literatură de specialitate dacă este cazul,{" "}
              <b>materiale promoționale</b>, precum și{" "}
              <b>orice alte date informative necesare</b> și utile
              Intermediarului în activitatea de promovare și vânzare a
              bunurilor. În toată activitatea Beneficiarul va ține cont de Anexa
              nr.3 care face parte integrantă din prezentul Contract , anexa
              denumită generic{" "}
              <b>“Standarde și Sfaturi pentru conținutul Beneficiarilor”</b>
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Beneficiarul va întocmi <b>Oferta fermă</b>, ce va fi cuprinsă ca
              Act la
              <b>anexa nr.1</b> la prezentul contract și are obligația{" "}
              <b>să-l informeze pe Intermediar</b> despre starea stocului de
              bunuri, cantitățile pe care le poate livra, termenul în care poate
              face livrarea, precum și orice alte informații pe care
              Intermediarul le solicită.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>Conform înțelegerii părților:</span>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                Beneficiarul va prelua comanda clienților solicitată prin
                intermediul site-ului www.funeralls.com. Tot Beneficiarul va
                emite Contractul de Prestare servicii si vanzare de produse
                catre clientul de pe platforma{" "}
                <p className="inline text-blue-700 underline">
                  www.funeralls.com
                </p>{" "}
                insoțit de factura corespunzătoare. Beneficiarul se obligă să
                onoreze comanda în termenul asumat prin contract de{" "}
                {termenOnorareContract?.cantitate &&
                termenOnorareContract?.unitateDeMasura
                  ? `${termenOnorareContract?.cantitate} ${termenOnorareContract?.unitateDeMasura}`
                  : `${termenOnorareContract?.cantitate} ${termenOnorareContract?.unitateDeMasura}`}{" "}
                de la ora si data la care i-a fost solicitata de client.
                Onorarea comenzii se face prin livrarea bunurilor la punctul de
                destinatie indicat de client, în cantitatea stabilită, însoțită
                de factură pentru suma achitată. Prețul va fi achitat de către
                client imediat ce a intrat in posesia facturii cãtre
                Intermediar. Intermediarul va incasa banii de la client si va
                plãti furnizorului contravaloarea facturii emise din care va
                retine comisionul de ____ % , comision pentru care Intermediarul
                va emite factura aferenta cãtre Beneficiar.
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                Intermediarul va prezenta oferta Beneficiarului către
                potențialii clienți, însoțită după caz de mostre informatice cu
                precãdere poze oferite de către Beneficiar Intermediarului și
                pentru fiecare comandă platforma{" "}
                <p className="inline text-blue-700 underline">
                  www.funeralls.com
                </p>{" "}
                va pune în legătura clientul cu Beneficiarul;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                Comisionul tranzactiilor efectuate prin intermediul platoformei
                www.funeralls.com intre Intermediar si Beneficiar este de{" "}
                {comisionPlatforma?.value
                  ? `${comisionPlatforma.value} `
                  : `______`}
                <i>(procentul in litere)</i>% din valoarea facturilor emise,
                aparte de abanamentul achizitionat.
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              Beneficiarul este direct răspunzător de calitatea bunurilor.
              Intermediarul nu răspunde de eventualitatea refuzării acceptării
              bunurilor de către cumpărător, pe motiv de calitate
              necorespunzătoare a acestora.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(6)</span>
          </div>
          <div>
            <span>
              <b>Intermediarul va acționa pe spezele sale</b>, cu excepția
              cazului în care va colabora cu Beneficiarul în activitatea de
              publicitate pe piețele din Teritoriul contractual, atât în ce
              privește formele, cât și cheltuielile de publicitate, dacă este
              cazul. Beneficiarul se obliga sa plateasca lunar{" "}
              {comisionPublicitate?.tip && comisionPublicitate?.valoare
                ? comisionPublicitate.tip === "suma fixa"
                  ? `suma de ${comisionPublicitate.valoare} (RON).`
                  : `un procent de ${comisionPublicitate.valoare} %.`
                : "(un procent din vanzari/suma fixa)."}
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(7)</span>
          </div>
          <div>
            <span>
              Pe tot parcursul desfășurării prezentului contract, Beneficiarul
              este proprietarul bunurilor, Intermediarul acționând în numele și
              pentru Beneficiar. Intermediarul va menționa clienților calitatea
              sa de intermediar prin intermediul Termenilor și Condițiilor.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(8)</span>
          </div>
          <div>
            <span>
              Beneficiarul este îndreptățit să primească rapoarte și statistici
              atât în ceea ce privește vânzările cât și despre modul
              desfășurării activității de către Intermediar, acesta fiind
              obligat să-l înștiințeze pe Beneficiar despre modul cum decurge
              prospectarea pieței.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.5 Garantarea seriozității cumpărătorului
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>Conform voinței părților, Intermediarul:</span>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                nu garantează seriozitatea și solvabilitatea clientului;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                garantează seriozitatea și solvabilitatea clientului și în
                această situație:
              </span>
            </div>
            <div className="flex gap-x-5 ml-14">
              <span>-</span>
              <span>
                Intermediarul va avea dreptul la un comision mai mare, conform
                prevederilor art.7, al.(2) al prezentului contract;
              </span>
            </div>
            <div className="flex gap-x-5 ml-14">
              <span>-</span>
              <span>
                în cazul în care s-a produs o pagubă în sarcina Beneficiarului,
                reducerea comisionului se va face proporțional cu valoarea
                pagubei suferite de către Beneficiar.
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Intermediarul nu răspunde dacă întârzierea de plată a
              cumpărătorului se datorează unui caz de forță majoră așa cum este
              definit de lege, sau culpei Beneficiarului în livrarea mărfii
              conforme calității și cantității stabilite în contractul de
              vânzare, respectiv export.
            </span>
          </div>
        </div>
      </div>
      {/* cap III */}
      <div className="flex flex-col gap-y-4 mt-10">
        {/* titlu */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP.III DURATA CONTRACTULUI
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.6 Durata contractului. Termenul
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Prezentul contract se încheie începând cu data de{" "}
              {durataContract?.dataStart
                ? `${durataContract?.dataStart}`
                : `___/___/______
              (se va trece data in sistem german și anume zz/ll/aaaa) `}{" "}
              și se desfășoară până la data de{" "}
              {durataContract?.dataFinal
                ? durataContract?.dataFinal
                : ` ___/___/______`}{" "}
              (se va trece data in sistem german și anume zz/ll/aaaa). Cu 30
              zile lucrătoare înainte de expirarea valabilități prezentului
              contract, părțile vor decide în scris asupra prelungirii sale cu
              încă{" "}
              {durataContract?.prelungire
                ? `${durataContract?.prelungire?.cantitate} ${durataContract?.prelungire?.unitateDeMasura}`
                : `_______ (se vor trece, conform înțelegerii, zile, luni, ani)`}
              .
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              În cazul în care un client a efectuat o tranzacție în termenul
              prevăzut mai sus și a plătit-o iar efectuarea prestației de către
              Beneficiar va avea loc după trecerea termenului contractual,
              prezentul contract se consideră respectat în termen, Intermediarul
              având dreptul la reținerea comisionului.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              În cazul în care Intermediarul a atras pe platforma un client după
              expirarea termenului prezentului contract, Beneficiarul are
              dreptul să refuze acceptarea ofertei sau să accepte tranzacția. În
              acest caz, contractul se consideră prorogat în mod tacit pe o
              perioadă nedeterminată de timp.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              În cazul prorogării tacite pe o perioadă nedeterminată de timp,
              fiecare din părți va avea dreptul să înceteze oricând executarea
              obligațiilor contractuale cu condiția să notifice incetarea către
              cealaltă parte. Această notificare va fi făcută cu respectarea
              termenului de preaviz prevăzut în contract pentru încetarea
              contractului.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              În cazul în care părțile au prelungit termenul prevăzut mai sus,
              prin comun acord, Intermediarul se consideră în termen și are
              dreptul să primească comisionul în condițiile prezentului
              contract.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(6)</span>
          </div>
          <div>
            <span>
              Termenul poate fi modificat prin acordul scris al ambelor părți.
            </span>
          </div>
        </div>
      </div>
      {/* cap IV */}
      <div className="flex flex-col gap-y-4 mt-10">
        {/* titlu */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP. IV PREȚ ȘI MODALITĂȚI DE PLATĂ
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">Art.7 Comisionul</span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Prețul datorat de Beneficiar Intermediarului reprezintă
              <b>contravaloarea serviciilor de intermediere</b> și se calculează
              ca procent din valoarea tranzacției, purtând numele de{" "}
              <b>comision</b>.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>Intermediarul va beneficia de un comision astfel:</span>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                <b>
                  Intermediarul nu garantează seriozitatea și solvabilitatea
                  clientului
                </b>
                . În acest caz, Intermediarul va beneficia de un comision
                reprezentând{" "}
                {pretSiModalitatiDePlata?.tipGarantie === "garantie-solida"
                  ? `${pretSiModalitatiDePlata?.valoarePret} %`
                  : `_______%`}{" "}
                din valoarea totală a tranzacției;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                <b>
                  Intermediarul garantează seriozitatea și solvabilitatea
                  clientului
                </b>
                . În acest caz, Intermediarul va beneficia de un comision
                reprezentând{" "}
                {pretSiModalitatiDePlata?.tipGarantie === "negarantat"
                  ? `${pretSiModalitatiDePlata?.valoarePret} %`
                  : `_______%`}{" "}
                din valoarea totală a tranzacției;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                alt mod de dobândire a comisionul convenit de către părți:
                {pretSiModalitatiDePlata?.tipGarantie === "custom"
                  ? pretSiModalitatiDePlata?.valoarePret
                  : ` _______________________`}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div className="max-w-full">
            <span>
              Conform voinței părților, comisionul va fi plătit Intermediarului
              astfel:
            </span>
            <div className="flex gap-x-2 items-start max-w-full">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span className="text-wrap">
                Intermediarul va încasa prețul de la cumpărător și în baza
                comenzii își va reține comisionul urmând a achita Beneficiarului
                doar prețul per achiziție, diminuat cu valoarea comisionului;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                {pretSiModalitatiDePlata?.modalitatePlata === "altfel"
                  ? `${pretSiModalitatiDePlata?.valoarePlata}`
                  : `altfel:_________________________________________________________`}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              Încasarea comisionului de către Intermediar se va face astfel:
            </span>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                pe bază de factură emisă de Intermediar către Beneficiarul
                prevăzute în capitolul 1, art.1 al prezentului contract ;
              </span>
            </div>
            <div className="flex gap-x-2 items-start">
              <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="5"
                    y="5"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span>
                în termen de{" "}
                {termenIncasareComision?.value
                  ? termenIncasareComision.value
                  : `______`}{" "}
                zile calendaristice de la data încasării valorii totale a
                facturii emise de către Beneficiar către client.
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              In situația în care clientul nu mai dorește să contacteze după
              semnarea contractului, Intermediarul nu beneficiază de comisionul
              ce-i revine, așa cum este prevăzut în prezentul contract.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.8 Penalități de întârziere
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              <b>
                În cazul în care Intermediarul întârzie din culpă efectuarea
                plății contravalorii prestației efectuate de Beneficiar
              </b>
              nerespectând termenul prevăzut la art.7 al.(4), 6 Beneficiarul
              poate solicita penalități de întârziere prin reducerea
              comisionului pe tranzacție cu ____%, pentru fiecare zi de
              întârziere.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              <b>
                În cazul în care Beneficiarul nu a onorat comanda în termenul
                prevăzut la art.4 al.(4), din culpă
              </b>
              , Intermediarul poate cere penalități de întârziere de ____% pe zi
              de întârziere, din total tranzacție, prin întârzierea de către
              Beneficiar a onorarii comenzii considerându-se că s- a adus
              atingere imaginii Intermediarului în fața clienților.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              La împlinirea termenului scadent penalitățile încep să curgă de
              drept și debitorul este de drept pus în întârziere fără să mai fie
              necesară o notificare în acest sens.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              Măsurile luate de Intermediar împotriva Beneficiarului în cazul
              neonorării unei comenzi sau unor comenzi vor fi , după caz:
              scoaterea Beneficiarului din ofertare pe platformă cu păstrarea
              Abonamentului, scoaterea Beneficiarului din ofertare pe platformă
              fără păstrarea Abonamentului.Și într-un caz și în celălalt se va
              proceda la notificare prealabilă.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              Intermediarul nu poate interveni sub nicio formă asupra scorului
              obținut de Beneficiar în urma review-urilor făcute doar de clienți
              pe site.
            </span>
          </div>
        </div>
      </div>
      {/* cap V */}
      <div className="flex flex-col gap-y-4 mt-10">
        {/* titlu */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP.V DREPTURILE ȘI OBLIGAȚIILE PĂRȚILOR
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.9 Drepturile și obligațiile Intermediarului
          </span>
        </div>
        <div className="flex gap-x-10 flex-col">
          <div className="flex gap-x-10">
            <span></span>
            <span>
              Atât drepturile cât și obligațiile Intermediarului reies din
              cuprinsul întregului contract, cu respectarea fiecărei clauze
              contractuale, cum ar fi spre exemplu (dar nu limitativ):
            </span>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>a)</span>
              <span>
                să dispună de independență absolută și exclusivitate atunci când
                i s-a acordat în realizarea prestarea serviciilor de
                intermediere, să extindă afacerile Beneficiarului sporindu-i
                buna reputație și să lucreze la capacitatea și eficiența sa
                maximă;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>b)</span>
              <span>să-și rețină comisionul conform prezentului contract;</span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>c)</span>
              <span>
                să se informeze asupra credibilității și solvabilității
                clienților cu care negociază, informându-i pe aceștia despre
                calitatea sa de Intermediar;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>d)</span>
              <span>
                să nu își depășească atribuțiile și împuternicirea dată,
                acționând în numele și pentru Beneficiar;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>e)</span>
              <span>
                să garanteze seriozitatea și solvabilitatea clientului, atunci
                când s-a obligat în acest sens;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>f)</span>
              <span>
                să preia prin platformă comenzile clienților și să le comunice
                în termen Beneficiarului;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>g)</span>
              <span>
                să aducă la cunoștința Beneficiarului informațiile de orice
                natură cu privire la bunuri și calitatea acestora, despre care
                ia cunoștința de la clienții săi prin comunicarea opțiunilor
                acestora;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>h)</span>
              <span>
                să respecte “Teritoriul” prevăzut în prezentul contract și să-l
                informeze pe Beneficiar de o eventuală posibilitate a extinderii
                acestuia;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>i)</span>
              <span>
                să nu promoveze și să nu vândă în Teritoriul contractual bunuri
                similare cu cele ale Beneficiarului, în cazul în care s-a
                obligat în acest sens;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>j)</span>
              <span>
                să respecte confidentialitatea prezentului contract, respectând
                toate secretele de comerț și know-how de care a luat cunoștința,
                în caz contrar suportând sancțiunile contractuale;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>k)</span>
              <span>
                să solicite și să i se pună la dispoziție de către Beneficiar
                toate mostrele informatice privitoare la bunurile ce fac
                obiectul contractului, literatură de specialitate dacă este
                cazul, materiale promoționale, precum și orice alte date
                informative necesare și utile Intermediarului în activitatea de
                promovare și vânzare a mărfurilor Beneficiarului;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>l)</span>
              <span>
                să prelucreze datele cu caracter personal ale persoanelor fizice
                cu care intră în contact în temeiul contractului, conform legii
                și prezentului contract;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>m)</span>
              <span>
                alte drepturi și obligații ce-i revin prin lege și prezentul
                contract.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.10 Drepturile și obligațiile Beneficiarului
          </span>
        </div>
        <div className="flex gap-x-10 flex-col">
          <div className="flex gap-x-10">
            <span></span>
            <span>
              Atât drepturile cât și obligațiile Intermediarului reies din
              cuprinsul întregului contract, cu respectarea fiecărei clauze
              contractuale, cum ar fi spre exemplu (dar nu limitativ):
            </span>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>a)</span>
              <span>
                să-i fie respectată exclusivitatea în vederea vânzării bunurilor
                conform prevederilor art.3 al.(2) al prezentului contract în
                cazul în care părțile au convenit astfel;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>b)</span>
              <span>
                să acorde Intermediarului independență în activitățile de
                intermediere;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>c)</span>
              <span>
                să încheie cu clientul contracte ulterioare de vânzare, conform
                normelor sale interne;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>d)</span>
              <span>
                să aducă la cunoștința Intermediarului orice date necesare și
                utile cu privire la bunuri;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>e)</span>
              <span>
                să achite comisionul și beneficiile în condițiile stipulate în
                prezentul contract;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>f)</span>
              <span>
                să predea Intermediarului la încheierea acestui contract oferta
                fermă, completă și precisă, să declare că este în măsură să o
                onoreze imediat și să mențină oferta fermă pe parcursul
                desfășurării contractului, informându-l pe Intermediar de
                eventualele schimbări intervenite;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>g)</span>
              <span>
                să asigure ambalarea bunurilor și transportul la client;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>h)</span>
              <span>
                să pună la dispoziția Intermediarului toate mostrele privitoare
                la bunurile ce fac obiectul contractului, cataloage, literatură
                de specialitate dacă este cazul, materiale promoționale, precum
                și orice alte date informative necesare și utile Intermediarului
                în activitatea de promovare și vânzare a acestora;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>i)</span>
              <span>
                să achite Intermediarului comisionul în condițiile prezentului
                contract;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>j)</span>
              <span>
                să-l informeze pe Intermediar despre calitatea și cantitatea
                mărfurilor ce pot fi livrate și să onoreze comenzile la termen;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>k)</span>
              <span>
                să comunice platformei imediat orice diminuare a stocului de
                marfă de care dispune de la data de la care a survenit scăderea
                volumului de marfă precum și să garanteze calitatea bunurilor;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>l)</span>
              <span>să păstreze confidentialitatea contractului;</span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>m)</span>
              <span>
                să prelucreze datele cu caracter personal ale persoanelor fizice
                cu care intră în contact în temeiul contractului, conform legii
                și prezentului contract;
              </span>
            </div>
          </div>
          <div className="flex gap-x-10">
            <div></div>
            <div className="flex gap-x-4">
              <span>n)</span>
              <span>
                orice alte drepturi și obligații ce-i revin prin lege și
                prezentul contract.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.11 Prelucrarea datelor cu caracter personal
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Fiecare dintre părțile contractante se obligă să respecte
              legislația cu privire la protecția, confidențialitatea și
              prelucrarea datelor cu caracter personal, respectiv Regulamentul
              UE 679/2016 al Parlamentului European și Consiliului și orice alte
              acte normative în domeniu, în vigoare.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Fiecare dintre părțile contractante se obligă să respecte
              legislația cu privire la protecția, confidențialitatea și
              prelucrarea datelor cu caracter personal, respectiv Regulamentul
              UE 679/2016 al Parlamentului European și Consiliului și orice alte
              acte normative în domeniu, în vigoare.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              În cazul în care una dintre părți interacționează cu o persoană
              fizică, angajat sau colaborator al celeilalte părți cu privire la
              care trebuie să prelucreze anumite date cu caracter personal, va
              informa cealaltă parte cu privire la: numele și prenumele acelei
              persoane, funcția sau statutul în cadrul organizației, datele cu
              caracter personal pe care le colectează, temeiul colectării
              acestora, modalitatea de protejare a datelor astfel colectate,
              informarea persoanei respective și obținerea consimțământului cu
              privire la prelucrarea datelor personale precum și cu privire la
              drepturile pe care persoana le are, conform legii.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              În cazul cesionării sau subcontractării, totale sau parțiale a
              prezentului contract, ambele părți se vor asigura că terții
              cesionari sau subcontractanți respectă obligațiile cu privire la
              protecția și prelucrarea datelor cu caracter personal.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              Părțile se obligă reciproc să-și notifice în termen de 24 de ore
              în scris cu privire la orice plângere sau cerere care se referă
              direct la procesarea datelor cu caracter personal, la 8
              respectarea legislației în vigoare, sau cu privire la orice
              incident de securitate în acest sens precum și să-și ofere
              asistență una celeilalte în vederea respectării obligațiilor cu
              privire la protecția și prelucrarea datelor cu caracter personal
              ale persoanelor fizice, decurgând din derularea prezentului
              contract.
            </span>
          </div>
        </div>
      </div>
      {/* cap VI */}
      <div className="flex flex-col gap-y-4 mt-10">
        {/* titlu */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP.VI CONFIDENȚIALITATEA CONTRACTULUI
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.12 Sfera circulației informațiilor
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Datele de orice natură despre producția, know-how-ul, documentele
              companiei și alte afaceri ale Beneficiarului puse la dispoziție
              Intermediarului ca efect al derulării prezentului contract, sunt
              strict confidențiale.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Intermediarul poate dezvălui informații sau poate pune la
              dispoziție documente din cele menționate la al.(1), numai
              viitorilor parteneri de afaceri, după informarea prealabilă a
              Beneficiarului și cu acordul acestuia.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Intermediarul va folosi informațiile numai în scopul luării unor
              decizii cu privire la executarea prezentului contract, fiind ținut
              să nu le utilizeze în niciun alt scop.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              Aprobarea de a dezvălui parte din informațiile furnizate de
              Beneficiar, se va face în scris și se vor menționa termenii în
              care se permite o astfel de dezvăluire, la nevoie, părțile putând
              încheia convenție în acest sens.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              Durata prezentului angajament de confidențialitate este
              nelimitată, în afară de cazul în care una dintre părți notifică în
              scris celeilalte incitarea lui.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">Art.13 Sancțiuni</span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Nerespectarea prevederilor art.13, dă dreptul Beneficiarului la
              rezilierea prezentului contract cu solicitarea de daune-interese.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div className="flex flex-col">
            <span>Exonerează de răspundere următoarele situații:</span>
            <div className="flex gap-x-3">
              <span>a)</span>
              <span>
                dacă informațiile erau cunoscute înainte de a fi fost obținute
                de la Beneficiar;
              </span>
            </div>
            <div className="flex gap-x-3">
              <span>b)</span>
              <span>
                informația a fost primită dintr-o sursă neconfidențiala;
              </span>
            </div>
            <div className="flex gap-x-3">
              <span>c)</span>
              <span>
                dezvăluirea informației s-a făcut după ce s-a primit acordul
                scris pentru aceasta;
              </span>
            </div>
            <div className="flex gap-x-3">
              <span>d)</span>
              <span>
                informația era de circulație publică la data dezvăluirii ei;
              </span>
            </div>
            <div className="flex gap-x-3">
              <span>e)</span>
              <span>
                Intermediarul a fost obligat în mod legal să dezvăluie
                informația.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*  cap VII */}
      <div className="flex flex-col gap-y-4 mt-10">
        {/* titlu */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP.VII MODIFICAREA, CESIUNEA ȘI ÎNCETAREA CONTRACTULUI
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.14 Modificarea, cesiunea și încetarea contractului
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Prevederile prezentului contract pot fi modificate, după o
              prealabilă notificare, cu acordul ambelor părți, prin act
              adițional la contract, scris și semnat de părți. Contractul va fi
              adaptat corespunzător reglementarilor legale ulterioare încheierii
              acestuia, care îi sunt aplicabile.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Niciuna din părțile prezentului contract nu va putea cesiona
              drepturile și obligațiile ce rezultă din acesta unei terțe
              persoane, fără acordul prealabil, dat în scris, de către cealaltă
              parte.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Acordul scris se comunică cedentului în termen de 24 ore de la
              data când acesta a cerut cesionarului consimțământul;
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              În cazul în care cesionarul nu răspunde în termenul sus arătat, se
              consideră că acesta nu a consimțit la cesiunea contractului.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div className="flex flex-col">
            <span>
              Acest contract încetează în una din următoarele situații:
            </span>
            <div className="flex gap-x-4">
              <span>a)</span>
              <span>
                expirarea duratei stipulate în contract, dacă acesta nu a fost
                modificat sau prelungit tacit în condițiile art.6;
              </span>
            </div>
            <div className="flex gap-x-4">
              <span>b)</span>
              <span>
                prin denunțare unilaterală, când una din părți îi dă celeilalte
                un preaviz, anunțând-o în scris că intenționează să pună capăt
                raporturilor contractuale;
              </span>
            </div>
            <div className="flex gap-x-4">
              <span>c)</span>
              <span>
                rezilierea contractului pentru neexecutare: - neexecutarea
                culpabila a obligațiilor de către una dintre părți la termenele
                și în condițiile stabilite în prezentul contract, dă dreptul
                celeilalte părți de a rezilia contractul cu daune-interese.
                Rezilierea operează în baza declarației unilaterale a părții
                îndreptățite cu respectarea termenului de preaviz prevăzut în
                prezentul articol.
              </span>
            </div>
            <div className="flex gap-x-4">
              <span>d)</span>
              <span>
                prin falimentul Beneficiarului, persoană juridică sau decesul
                Intermediarului reprezentantului principal al Intermediarului
                persoană juridică, în măsura în care contractul este încheiat
                intuitu personae (în considerarea persoanei) și părțile convin
                astfel și dacă contractul nu se poate derula fără reprezentarea
                acesteia.
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(6)</span>
          </div>
          <div>
            <span>
              Partea care invocă o cauză de încetare a prezentului contract o va
              notifica celeilalte părți în baza unui preaviz, cu cel puțin
              _______ zile lucrătoare înainte de data la care încetarea urmează
              să-și producă efectele.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(7)</span>
          </div>
          <div>
            <span>
              Prevederile prezentului articol nu înlătura răspunderea parții
              care, din culpă, a cauzat încetarea contractului.
            </span>
          </div>
        </div>
      </div>
      {/* cap VIII */}
      <div className="flex flex-col gap-y-4 mt-10">
        <div className="flex justify-center">
          <span className="text-xl font-semibold">
            CAP.VIII DISPOZIȚII FINALE ȘI TRANZITORII
          </span>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.15 Forța majoră și cazul fortuit
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Exceptând cazurile în care nu au prevăzut altfel, în mod expres,
              niciuna din părțile contractante nu va fi răspunzătoare pentru
              neexecutarea în termen și/sau în mod necorespunzător, total sau
              parțial, a oricăreia dintre obligațiile care le revin, dacă
              neexecutarea obligației respective a fost cauzată de un eveniment
              imprevizibil la data încheierii contractului, extern, absolut
              invincibil și inevitabil și ale cărui consecințe sunt de
              neînlăturat de către partea care îl invocă (ex. cutremur, etc).
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              Partea care invocă forța majoră este obligată să aducă la
              cunoștința celeilalte părți, în termen de 72 ore, în scris și în
              mod complet, producerea acesteia și să ia toate măsurile care îi
              stau la dispoziție în vederea limitării consecințelor
              respectivului eveniment. Forța majoră este constatată și
              certificată de Camera de Comerț și Industrie competentă. Dacă în
              termen de 30 de zile de la data producerii lui, respectivul
              eveniment nu încetează, fiecare parte va avea dreptul să notifice
              celeilalte părți încetarea sau suspendarea contractului, fără ca
              una din părți să poată pretinde celeilalte daune – interese.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Cazul fortuit înlătură răspunderea părților în măsura în care
              acesta a fost comunicat celeilalte părți în termenul prevăzut la
              alineatul precedent și poate fi dovedit.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              În sensul alineatului precedent, părțile convin ca următoarele
              situații să fie considerate caz fortuit:
              ______________________________________________________________.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              În situațiile de forță majoră sau caz fortuit părțile nu-și
              datorează una celeilalte daune sau penalități și nu pot fi
              obligate la executarea prestațiilor cu excepția celor care
              necesită urgență și care pot fi executate.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(6)</span>
          </div>
          <div>
            <span>
              Pe perioada situației de forță majoră sau caz fortuit contractul
              se suspendă urmând a fi reluat după încetarea situației care a
              cauzat suspendarea.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.16 Notificări între părți
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              În accepțiunea părților contractante orice notificare adresată de
              una dintre acestea celeilalte este valabil îndeplinita dacă este
              transmisă la adresa/sediul prevăzut în partea introductivă a
              prezentului contract sau prin mijloace electronice (e-mail, sms
              sau WhatsApp asumat prin prezentul contract).
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div>
            <span>
              În cazul în care notificarea se face pe cale poștală, ea va fi
              transmisă prin scrisoare recomandată cu confirmare de primire și
              se consideră primită de destinatar la data menționată de oficiul
              poștal primitor pe această confirmare. Dacă confirmarea se
              transmite e-mail, sms, whatsapp sau altă rețea asemănătoare, ea se
              consideră primita în prima zi lucrătoare după cea în care a fost
              expediată. Notificările verbale se iau în considerare în măsura în
              care acestea sunt confirmate și în una din modalitățile descrise
              mai sus.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Partea căreia îi este adresată notificarea va oferi răspunsul său
              celeilalte părți în termen de 2 zile lucrătoare de la
              recepționarea notificării, dacă prin notificare sau prin contract
              nu se prevede un alt termen.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="font-semibold italic">
            Art.17 Litigii. Alte dispoziții finale
          </span>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(1)</span>
          </div>
          <div>
            <span>
              Litigiile care se vor naște din prezentul contract sau în legătura
              cu prezentul contract, inclusiv cele referitoare la validitatea,
              interpretarea, executarea sau desființarea lui vor fi soluționate
              pe cale amiabilă.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(2)</span>
          </div>
          <div className="flex flex-col">
            <span>
              Dacă părțile nu vor ajunge la o înțelegere amiabilă, atunci
              litigiile vor urma căile legale de soluționare, părțile
              adresându-se:
            </span>
            <div className="flex gap-x-2">
              <span>()</span>
              <span>
                instanțelor de judecată competente de la sediul Intermediarului
                si anume localitatea Tecuci, jud. Galați;
              </span>
            </div>
            <div className="flex gap-x-2">
              <span>()</span>
              <span>curții de Arbitraj__________________________.</span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(3)</span>
          </div>
          <div>
            <span>
              Prezentul contract se completează cu prevederile legale în
              vigoare. Modificarea prezentului contract se face numai prin act
              adițional scris și semnat de părțile contractante.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(4)</span>
          </div>
          <div>
            <span>
              Prezentul contract împreună cu anexele sale, care fac parte
              integrantă din cuprinsul său, reprezintă voința părților și
              înlătură orice înțelegere verbală dintre acestea, anterioară sau
              ulterioară încheierii lui.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(5)</span>
          </div>
          <div>
            <span>
              În cazul în care părțile își încalcă obligațiile, neexercitarea de
              partea care suferă vreun prejudiciu a dreptului de a cere
              executarea întocmai sau prin echivalent bănesc a obligației
              respective, nu înseamnă că ea a renunțat la acest drept al său.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(6)</span>
          </div>
          <div>
            <span>
              Prezentul contract conține un număr de ___ (___) capitole, ___
              (____) articole, este redactat pe ____ (____) pagini, exceptând
              anexele, s-a încheiat în _______ exemplare, la sediul ___________
              azi______________, data semnării lui.
            </span>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div>
            <span>(7)</span>
          </div>
          <div>
            <span>
              Orice act adițional la prezentul contract se va întocmi tot în
              atâtea exemplare făcându-se mențiunea despre acesta la finele
              contractului.
            </span>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-between mt-10">
        <div>INTERMEDIAR________</div>
        <div>BENEFICIAR____________</div>
      </div>
    </div>
  );
}
