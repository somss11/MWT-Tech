import Link from "next/link";
import { CopyrightNotice } from "@/components/CopyrightNotice";

/**
 * Oil and Gas on SAP: the body of the supplied page, copied as it was. The markup, text and illustrations
 * are unchanged. Links were pointed at this site, and the page's own copyright line was left out: the site's notice
 * closes the page, like every other page.
 * Generated from the supplied file.
 */
export function OilBody() {
  return (
    <div id="top">
    <section className="hero pp-hero og-hero">
      <div className="in">
        <div className="crumbs">
          <Link href="/industries">
            Industries
          </Link>
          {" "}
          /
          {" "}
          <Link href="/industries">
            SAP
          </Link>
          {" "}
          / Oil and Gas
        </div>
        <span className="eyebrow">
          Downstream oil and gas on SAP
        </span>
        <h1>
          From the tanker to the forecourt,
          {" "}
          <em>
            every litre on one SAP core.
          </em>
        </h1>
        <p className="lede">
          For fuel importers, terminal operators, station networks, lubricant blenders and LPG distributors in Sri Lanka and the region. SAP's oil and gas solution handles what generic ERPs cannot: volumes that change with temperature, products that move in bulk, and margins that move with every price change. We also take companies running SAP ECC Oil & Gas to RISE with SAP.
        </p>
        <div className="ctas">
          <a href="#book" className="btn pri">
            Talk to our SAP oil and gas team →
          </a>
          <a href="#migrate" className="btn sec">
            Moving from ECC Oil & Gas
          </a>
        </div>
        <div className="pp-facts">
          <div>
            <b>
              Litres at 15°C
            </b>
            <span>
              Every quantity converted to industry standards
            </span>
          </div>
          <div>
            <b>
              Every truck
            </b>
            <span>
              Loaded, dispatched and reconciled
            </span>
          </div>
          <div>
            <b>
              Every station
            </b>
            <span>
              Sales, stock and dealer settled
            </span>
          </div>
          <div>
            <b>
              Every asset
            </b>
            <span>
              Tanks, pumps and fleets maintained
            </span>
          </div>
        </div>
        <figure className="pp-line" aria-label="Animated illustration: product moves from a tanker vessel to terminal tanks, road tankers and on to stations, industry and LPG customers, each step reporting to SAP">
          <div className="pp-scroll">
            <svg viewBox="0 0 1200 440" role="img" aria-hidden="true">
              <rect x="40" y="18" width="1120" height="78" rx="16" fill="#0e3a2b" stroke="#34b386" strokeWidth="1.5" />
              <text x="64" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="18" fontWeight="800" fill="#eef3f0">
                SAP Cloud ERP Private
              </text>
              <text x="64" y="74" fontFamily="Manrope, sans-serif" fontSize="12.5" fontWeight="600" fill="#a9bab2">
                with the oil and gas industry solution
              </text>
              <g fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#eef3f0">
                <rect x="372" y="40" width="96" height="32" rx="8" fill="#123f30" />
                <text x="420" y="61" textAnchor="middle">
                  Supply
                </text>
                <rect x="478" y="40" width="96" height="32" rx="8" fill="#123f30" />
                <text x="526" y="61" textAnchor="middle">
                  Terminals
                </text>
                <rect x="584" y="40" width="96" height="32" rx="8" fill="#123f30" />
                <text x="632" y="61" textAnchor="middle">
                  Dispatch
                </text>
                <rect x="690" y="40" width="96" height="32" rx="8" fill="#123f30" />
                <text x="738" y="61" textAnchor="middle">
                  Retail
                </text>
                <rect x="796" y="40" width="96" height="32" rx="8" fill="#123f30" />
                <text x="844" y="61" textAnchor="middle">
                  Assets
                </text>
                <rect x="902" y="40" width="96" height="32" rx="8" fill="#123f30" />
                <text x="950" y="61" textAnchor="middle">
                  Finance
                </text>
                <circle cx="1100" cy="56" r="9" fill="#34b386" className="a-blink" />
              </g>
              <g stroke="#34b386" strokeWidth="2" fill="none" className="a-up">
                <path d="M130 250 V96" />
                <path d="M380 210 V96" />
                <path d="M640 270 V96" />
                <path d="M880 220 V96" />
                <path d="M1080 250 V96" />
              </g>
              <g fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="800" fill="#34b386" letterSpacing=".06em">
                <rect x="138" y="122" width="90" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                <text x="183" y="137" textAnchor="middle">
                  CARGO · MT
                </text>
                <rect x="388" y="122" width="96" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                <text x="436" y="137" textAnchor="middle">
                  TANK · L15
                </text>
                <rect x="648" y="122" width="106" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                <text x="701" y="137" textAnchor="middle">
                  LOAD · 4 COMP
                </text>
                <rect x="888" y="122" width="90" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                <text x="933" y="137" textAnchor="middle">
                  DIP · METER
                </text>
                <rect x="1088" y="122" width="66" height="22" rx="6" fill="#0a1a14" stroke="#1c2823" />
                <text x="1121" y="137" textAnchor="middle">
                  SALES
                </text>
              </g>
              <path d="M20 372 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0" stroke="#1f5a7a" strokeWidth="3" fill="none" className="a-belt" />
              <rect x="20" y="398" width="1160" height="6" rx="3" fill="#1c2823" />
              <g>
                <path d="M30 330 h200 l-20 40 h-160 z" fill="#2c3d36" />
                <rect x="170" y="290" width="40" height="40" fill="#3a4a43" />
                <rect x="180" y="276" width="10" height="16" fill="#e9730c" />
                <g fill="#16231d">
                  <rect x="56" y="316" width="24" height="14" rx="3" />
                  <rect x="88" y="316" width="24" height="14" rx="3" />
                  <rect x="120" y="316" width="24" height="14" rx="3" />
                </g>
                <path d="M130 330 V250" stroke="#9aaaa2" strokeWidth="2" />
                <text x="130" y="426" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                  Import cargo
                </text>
              </g>
              <path d="M232 340 H300" stroke="#5c6c65" strokeWidth="8" />
              <path d="M232 340 H300" stroke="#e9730c" strokeWidth="2" className="a-belt" />
              <g>
                <clipPath id="t1">
                  <rect x="300" y="230" width="80" height="168" rx="6" />
                </clipPath>
                <clipPath id="t2">
                  <rect x="392" y="250" width="70" height="148" rx="6" />
                </clipPath>
                <rect x="300" y="230" width="80" height="168" rx="6" fill="#16231d" stroke="#2c3d36" strokeWidth="2" />
                <g clipPath="url(#t1)">
                  <rect x="300" y="300" width="80" height="100" fill="#b5651d" opacity=".55" className="a-blink" />
                </g>
                <rect x="392" y="250" width="70" height="148" rx="6" fill="#16231d" stroke="#2c3d36" strokeWidth="2" />
                <g clipPath="url(#t2)">
                  <rect x="392" y="320" width="70" height="80" fill="#f2c232" opacity=".45" className="a-blink d2" />
                </g>
                <path d="M300 250 h80 M392 268 h70" stroke="#3a4a43" strokeWidth="2" />
                <text x="381" y="426" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                  Terminal storage
                </text>
              </g>
              <g>
                <rect x="520" y="290" width="170" height="64" rx="30" fill="#e9e2cf" stroke="#bfb497" strokeWidth="2" />
                <path d="M562 292 V352 M604 292 V352 M646 292 V352" stroke="#bfb497" strokeWidth="2" />
                <rect x="692" y="300" width="56" height="54" rx="8" fill="#1f7a5a" />
                <rect x="704" y="308" width="28" height="18" rx="3" fill="#a9d8c6" />
                <circle cx="560" cy="366" r="14" fill="#2c3d36" />
                <circle cx="650" cy="366" r="14" fill="#2c3d36" />
                <circle cx="726" cy="366" r="14" fill="#2c3d36" />
                <g fontFamily="Manrope, sans-serif" fontSize="10" fontWeight="800">
                  <text x="541" y="326" fill="#b5651d">
                    D
                  </text>
                  <text x="582" y="326" fill="#d4a017">
                    P92
                  </text>
                  <text x="624" y="326" fill="#b5651d">
                    D
                  </text>
                  <text x="664" y="326" fill="#1f7a5a">
                    P95
                  </text>
                </g>
                <text x="640" y="426" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                  Secondary distribution
                </text>
              </g>
              <g>
                <path d="M800 236 h160 l-10 20 h-140 z" fill="#1f7a5a" />
                <path d="M818 256 V398 M942 256 V398" stroke="#3a4a43" strokeWidth="6" />
                <rect x="846" y="300" width="28" height="60" rx="4" fill="#2c3d36" />
                <rect x="852" y="308" width="16" height="12" rx="2" fill="#34b386" className="a-blink" />
                <rect x="890" y="300" width="28" height="60" rx="4" fill="#2c3d36" />
                <rect x="896" y="308" width="16" height="12" rx="2" fill="#34b386" className="a-blink d3" />
                <text x="880" y="426" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                  Station network
                </text>
              </g>
              <g>
                <rect x="1000" y="300" width="70" height="98" fill="#16231d" stroke="#2c3d36" strokeWidth="2" />
                <rect x="1010" y="260" width="16" height="40" fill="#2c3d36" />
                <g fill="#c94c3c" stroke="#8a2e24">
                  <rect x="1086" y="330" width="22" height="40" rx="10" />
                  <rect x="1112" y="330" width="22" height="40" rx="10" />
                  <rect x="1138" y="330" width="22" height="40" rx="10" />
                  <rect x="1099" y="292" width="22" height="40" rx="10" className="a-blink d4" />
                  <rect x="1125" y="292" width="22" height="40" rx="10" className="a-blink d5" />
                </g>
                <text x="1090" y="426" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#9aaaa2">
                  Industry, aviation, LPG
                </text>
              </g>
            </svg>
          </div>
          <figcaption className="pp-cap">
            <span>
              Each movement reports to SAP in standard and observed units.
            </span>
            <span>
              Illustration
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="light" id="market">
      <div className="in">
        <span className="eyebrow">
          Why now in Sri Lanka
        </span>
        <h2>
          An open market has changed what fuel companies need from their systems.
        </h2>
        <p className="lede">
          Since 2023, Sri Lanka has licensed new importers and retailers alongside the state-owned Ceylon Petroleum Corporation and Lanka IOC. Sinopec, United Petroleum and RM Parks with Shell each received a 20-year licence to import, store, distribute and sell. All importers share storage through the national terminals company, and in 2026 the regulator scrutinised how evenly each network was supplying its stations.
        </p>
        <div className="pp-grid3">
          <div>
            <h3>
              Competition on service
            </h3>
            <p>
              Stations that run dry lose customers to the next brand. Replenishment and dispatch now decide market share.
            </p>
          </div>
          <div>
            <h3>
              Visibility the regulator expects
            </h3>
            <p>
              Issues from shared storage, deliveries per station and stock levels need to be reportable on demand.
            </p>
          </div>
          <div>
            <h3>
              Margins that move monthly
            </h3>
            <p>
              Formula-based price revisions change stock values and margins overnight. Finance needs to see the effect the same day.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="lines">
      <div className="in">
        <span className="eyebrow">
          Six downstream businesses
        </span>
        <h2>
          Each one works on different physics, margins and risks.
        </h2>
        <div className="og-lines">
          <div>
            <span className="ic">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 18h20l-3 5H6z" />
                <path d="M8 18V9h10v9M13 9V3" />
              </svg>
            </span>
            <h3>
              Import and supply
            </h3>
            <p>
              Cargo contracts, vessel nominations, letters of credit, outturn losses and landed cost in several currencies.
            </p>
            <p className="sap">
              <b>
                SAP
              </b>
              Hydrocarbon supply and primary distribution, Traders' and Schedulers' Workbench, landed cost.
            </p>
          </div>
          <div>
            <span className="ic">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="7" width="9" height="16" rx="2" />
                <rect x="14" y="10" width="9" height="13" rx="2" />
              </svg>
            </span>
            <h3>
              Terminals and storage
            </h3>
            <p>
              Tank gauging, receipts and issues in observed and standard volume, gains and losses, shared or exchanged stock.
            </p>
            <p className="sap">
              <b>
                SAP
              </b>
              Quantity conversion, tank and silo management, exchanges and borrow-loan agreements.
            </p>
          </div>
          <div>
            <span className="ic">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 23V6l4-3h8l4 3v17" />
                <path d="M8 10h8M8 14h8" />
              </svg>
            </span>
            <h3>
              Retail station network
            </h3>
            <p>
              Company and dealer stations, wet stock, shift sales, fleet and bank cards, dealer commission and credit.
            </p>
            <p className="sap">
              <b>
                SAP
              </b>
              Retail Fuel Network Operations: station data, card settlement, dealer settlement.
            </p>
          </div>
          <div>
            <span className="ic">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 23V12l6 3V12l6 3V6h8v17z" />
              </svg>
            </span>
            <h3>
              Commercial and industrial
            </h3>
            <p>
              Contract customers, power plants, aviation and marine bunkers, with formula pricing and credit exposure.
            </p>
            <p className="sap">
              <b>
                SAP
              </b>
              Secondary Distribution Management, formula pricing, credit management.
            </p>
          </div>
          <div>
            <span className="ic">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 3c4 6 7 9 7 13a7 7 0 0 1-14 0c0-4 3-7 7-13z" />
              </svg>
            </span>
            <h3>
              Lubricants
            </h3>
            <p>
              Base oils and additives blended to formulations, filled into packs and drums, sold through distributors and workshops.
            </p>
            <p className="sap">
              <b>
                SAP
              </b>
              Process manufacturing, batches and quality, distributor pricing and rebates.
            </p>
          </div>
          <div>
            <span className="ic">
              <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="8" y="6" width="10" height="17" rx="5" />
                <path d="M11 6V3h4v3" />
              </svg>
            </span>
            <h3>
              LPG
            </h3>
            <p>
              Bulk LPG, cylinder filling, deposits and returns, a dealer network and a large cylinder fleet to track.
            </p>
            <p className="sap">
              <b>
                SAP
              </b>
              Returnable packaging and deposits, filling as production, cylinder assets and inspections.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="light" id="quantity">
      <div className="in">
        <span className="eyebrow">
          The difference an oil and gas ERP makes
        </span>
        <h2>
          A litre is not a litre. It depends on the temperature.
        </h2>
        <p className="lede">
          Fuel expands as it warms. In a tropical climate, a tank measured at midday holds fewer litres at the 15°C reference used for trade, tax and stock. SAP's oil and gas solution converts every receipt, transfer and delivery using industry standards, and keeps each quantity in several units at once.
        </p>
        <div className="og-qty">
          <div className="fig">
            <svg viewBox="0 0 560 300" role="img" aria-label="Illustration: 10,000 litres of diesel observed at 32°C is about 9,860 litres at 15°C">
              <g>
                <rect x="40" y="40" width="22" height="200" rx="11" fill="none" stroke="var(--muted)" strokeWidth="2" />
                <circle cx="51" cy="252" r="20" fill="#e9730c" />
                <rect x="45" y="70" width="12" height="180" rx="6" fill="#e9730c" className="a-blink" />
                <text x="76" y="76" className="s-t">
                  32°C
                </text>
                <text x="76" y="200" className="s-ts">
                  15°C
                </text>
                <path d="M62 196 h10" stroke="var(--muted)" strokeWidth="2" />
              </g>
              <g>
                <rect x="150" y="60" width="140" height="190" rx="10" className="s-card" />
                <rect x="152" y="80" width="136" height="168" rx="8" fill="#b5651d" opacity=".55" />
                <text x="220" y="160" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="22" fontWeight="800" className="s-fg">
                  10,000 L
                </text>
                <text x="220" y="184" textAnchor="middle" className="s-ts">
                  OBSERVED
                </text>
              </g>
              <g className="s-gl a-flow" strokeWidth="3">
                <path d="M300 155 H350" />
              </g>
              <path d="M344 147 l10 8 -10 8" fill="none" stroke="var(--green-hi)" strokeWidth="3" />
              <g>
                <rect x="370" y="60" width="140" height="190" rx="10" className="s-card" />
                <rect x="372" y="83" width="136" height="165" rx="8" fill="#b5651d" opacity=".75" />
                <text x="440" y="160" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="22" fontWeight="800" className="s-fg">
                  ≈ 9,860 L
                </text>
                <text x="440" y="184" textAnchor="middle" className="s-ts">
                  AT 15°C
                </text>
              </g>
              <text x="280" y="288" textAnchor="middle" className="s-ts">
                Diesel, approximate, for illustration
              </text>
            </svg>
          </div>
          <div>
            <ul className="pp-ul">
              <li>
                <b>
                  Industry tables built in.
                </b>
                {" "}
                <span>
                  Conversions follow API and ASTM petroleum measurement standards, with density and temperature captured on each movement.
                </span>
              </li>
              <li>
                <b>
                  Several units on every document.
                </b>
                {" "}
                <span>
                  Observed litres, litres at 15°C, kilograms, metric tons and barrels, kept consistent from cargo to invoice.
                </span>
              </li>
              <li>
                <b>
                  Gains and losses explained.
                </b>
                {" "}
                <span>
                  Outturn, storage and transit differences posted with their cause, not hidden in a stock adjustment.
                </span>
              </li>
              <li>
                <b>
                  Bill on the agreed basis.
                </b>
                {" "}
                <span>
                  Each counterparty can be billed on its agreed standard, while stock and tax stay on yours.
                </span>
              </li>
            </ul>
            <div className="og-units">
              <span>
                L
              </span>
              <span>
                L15
              </span>
              <span>
                kg
              </span>
              <span>
                MT
              </span>
              <span>
                bbl
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="chain">
      <div className="in">
        <span className="eyebrow">
          Cargo to cash
        </span>
        <h2>
          Eight steps from the vessel to the bank, on one record.
        </h2>
        <ol className="og-chain">
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 20h22l-3 6H7z" />
                <path d="M9 20v-8h12v8" />
              </svg>
            </span>
            <h3>
              Buy
            </h3>
            <p>
              Cargo, LC, landed cost
            </p>
            <span className="t">
              SUPPLY
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="8" width="18" height="18" rx="3" />
                <path d="M6 14h18" />
              </svg>
            </span>
            <h3>
              Receive
            </h3>
            <p>
              Outturn at 15°C
            </p>
            <span className="t">
              HPM
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 20l6-6 5 5 7-9" />
              </svg>
            </span>
            <h3>
              Plan
            </h3>
            <p>
              Stock projection
            </p>
            <span className="t">
              TSW
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h14l-2 12H10z" />
                <path d="M12 12V8h6v4" />
              </svg>
            </span>
            <h3>
              Order
            </h3>
            <p>
              Stations and customers
            </p>
            <span className="t">
              SDM
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="16" height="10" rx="5" />
                <path d="M19 13h6l2 4v4h-8" />
                <circle cx="8" cy="24" r="2" />
                <circle cx="23" cy="24" r="2" />
              </svg>
            </span>
            <h3>
              Dispatch
            </h3>
            <p>
              Trucks and compartments
            </p>
            <span className="t">
              SDM
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 26V8l4-3h8l4 3v18" />
                <path d="M11 12h8" />
              </svg>
            </span>
            <h3>
              Sell
            </h3>
            <p>
              Station and card sales
            </p>
            <span className="t">
              RFNO
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 15l6 6 12-12" />
              </svg>
            </span>
            <h3>
              Reconcile
            </h3>
            <p>
              Dip, meter, delivery
            </p>
            <span className="t">
              RFNO
            </span>
          </li>
          <li>
            <span className="ic">
              <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 24V14M12 24V9M18 24v-7M24 24V6" />
              </svg>
            </span>
            <h3>
              Bill and learn
            </h3>
            <p>
              Margin per litre
            </p>
            <span className="t">
              FINANCE
            </span>
          </li>
        </ol>
      </div>
    </section>
    <section className="light" id="network">
      <div className="in">
        <span className="eyebrow">
          Stations and trucks
        </span>
        <h2>
          Keep every station supplied, and every litre accounted for.
        </h2>
        <div className="og-two">
          <div>
            <svg viewBox="0 0 520 220" role="img" aria-label="Illustration: a four-compartment road tanker loaded with two products for three stations">
              <rect x="20" y="70" width="360" height="90" rx="44" fill="#e9e2cf" stroke="#bfb497" strokeWidth="2" />
              <path d="M110 72 V158 M200 72 V158 M290 72 V158" stroke="#bfb497" strokeWidth="2" />
              <rect x="384" y="84" width="96" height="76" rx="10" fill="#1f7a5a" />
              <rect x="398" y="94" width="50" height="26" rx="4" fill="#a9d8c6" />
              <circle cx="90" cy="176" r="18" fill="#2c3d36" />
              <circle cx="300" cy="176" r="18" fill="#2c3d36" />
              <circle cx="440" cy="176" r="18" fill="#2c3d36" />
              <g fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="800" textAnchor="middle">
                <text x="65" y="112" fill="#8a4a16">
                  Diesel
                </text>
                <text x="65" y="130" fill="#5c6c65">
                  Station A
                </text>
                <text x="155" y="112" fill="#a0780c">
                  Petrol 92
                </text>
                <text x="155" y="130" fill="#5c6c65">
                  Station A
                </text>
                <text x="245" y="112" fill="#8a4a16">
                  Diesel
                </text>
                <text x="245" y="130" fill="#5c6c65">
                  Station B
                </text>
                <text x="335" y="112" fill="#a0780c">
                  Petrol 92
                </text>
                <text x="335" y="130" fill="#5c6c65">
                  Station C
                </text>
              </g>
              <text x="20" y="30" className="s-tg">
                ONE TRIP · FOUR COMPARTMENTS · THREE DROPS
              </text>
            </svg>
            <h3>
              Secondary distribution
            </h3>
            <p>
              Orders from stations and customers become loads that fit the truck, the compartments and the delivery windows.
            </p>
            <ul className="pp-ul">
              <li>
                <b>
                  Forecast and replenish.
                </b>
                {" "}
                <span>
                  Station stock and sales history drive suggested orders, so stations do not run dry.
                </span>
              </li>
              <li>
                <b>
                  Dispatch planning.
                </b>
                {" "}
                <span>
                  Trips planned by truck, compartment, product and route, then tracked to proof of delivery.
                </span>
              </li>
              <li>
                <b>
                  Loaded against delivered.
                </b>
                {" "}
                <span>
                  Quantities at the gantry and at the station compared, with differences raised for follow-up.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <svg viewBox="0 0 520 220" role="img" aria-label="Illustration: station reconciliation compares opening stock, deliveries, meter sales and closing dip">
              <text x="20" y="30" className="s-tg">
                DAILY STATION RECONCILIATION
              </text>
              <g fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" className="s-mu">
                <text x="20" y="72">
                  Opening dip
                </text>
                <text x="20" y="108">
                  + Deliveries
                </text>
                <text x="20" y="144">
                  − Meter sales
                </text>
                <text x="20" y="180">
                  = Expected vs closing dip
                </text>
              </g>
              <rect x="190" y="58" width="220" height="20" rx="4" fill="#b5651d" opacity=".6" />
              <rect x="190" y="94" width="160" height="20" rx="4" fill="#34b386" className="a-grow" />
              <rect x="190" y="130" width="270" height="20" rx="4" fill="#e9730c" opacity=".75" className="a-grow" />
              <rect x="190" y="166" width="110" height="20" rx="4" fill="#b5651d" opacity=".6" />
              <rect x="300" y="166" width="8" height="20" rx="2" fill="#e9730c" className="a-blink" />
              <text x="318" y="181" fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="800" fill="#e9730c">
                VARIANCE
              </text>
            </svg>
            <h3>
              Retail fuel network
            </h3>
            <p>
              Every station's sales, cards and stock come back to SAP, whether it is company owned or dealer operated.
            </p>
            <ul className="pp-ul">
              <li>
                <b>
                  Station data collected.
                </b>
                {" "}
                <span>
                  Meter readings, tank dips, shift sales and shop sales loaded from the forecourt systems.
                </span>
              </li>
              <li>
                <b>
                  Card settlement.
                </b>
                {" "}
                <span>
                  Bank, fleet and loyalty card transactions settled with the clearing house and customers.
                </span>
              </li>
              <li>
                <b>
                  Dealer settlement.
                </b>
                {" "}
                <span>
                  Commissions, credit and dealer statements calculated from the same data.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="assets">
      <div className="in">
        <span className="eyebrow">
          Assets, safety and compliance
        </span>
        <h2>
          Tanks, pipelines, pumps and trucks, maintained before they fail.
        </h2>
        <p className="lede">
          Downstream businesses are asset heavy and safety critical. SAP links maintenance, inspections and permits to the same assets that finance depreciates and operations depend on.
        </p>
        <div className="pp-grid4">
          <div>
            <span className="pp-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
              </svg>
            </span>
            <h3>
              Planned maintenance
            </h3>
            <p>
              Tanks, pumps, dispensers and fleet on time- and condition-based plans, worked on mobile in the field.
            </p>
          </div>
          <div>
            <span className="pp-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 18l5-6 4 3 7-9" />
              </svg>
            </span>
            <h3>
              Asset performance
            </h3>
            <p>
              Sensor data and failure history used to predict which assets need attention, with SAP Asset Performance Management.
            </p>
          </div>
          <div>
            <span className="pp-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
              </svg>
            </span>
            <h3>
              Health and safety
            </h3>
            <p>
              Incidents, permits to work, risk assessments and environmental records in SAP EHS.
            </p>
          </div>
          <div>
            <span className="pp-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="4" width="14" height="16" rx="2" />
                <path d="M9 9h6M9 13h6" />
              </svg>
            </span>
            <h3>
              Calibration
            </h3>
            <p>
              Meters, gauges and dispensers calibrated and certified on schedule, with the evidence on record.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="light" id="finance">
      <div className="in">
        <span className="eyebrow">
          Pricing and finance
        </span>
        <h2>
          See the margin per litre, by channel, the day prices change.
        </h2>
        <div className="og-qty">
          <div className="fig">
            <svg viewBox="0 0 560 280" role="img" aria-label="Illustration: price build-up from product cost to freight, terminal and distribution, taxes and levies, and margins">
              <text x="20" y="28" className="s-tg">
                WHAT MAKES UP A LITRE
              </text>
              <g>
                <rect x="60" y="50" width="90" height="200" rx="6" fill="#b5651d" opacity=".75" />
                <rect x="60" y="50" width="90" height="34" rx="6" fill="#34b386" />
                <rect x="60" y="84" width="90" height="46" fill="#7a3f9c" opacity=".8" />
                <rect x="60" y="130" width="90" height="22" fill="#0d7c86" />
                <rect x="60" y="152" width="90" height="18" fill="#5c6c65" />
              </g>
              <g fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" className="s-fg">
                <path d="M156 67 H190" className="s-ln" />
                <text x="196" y="71">
                  Dealer and company margin
                </text>
                <path d="M156 107 H190" className="s-ln" />
                <text x="196" y="111">
                  Taxes, duties and levies
                </text>
                <path d="M156 141 H190" className="s-ln" />
                <text x="196" y="145">
                  Terminal and distribution
                </text>
                <path d="M156 161 H190" className="s-ln" />
                <text x="196" y="165">
                  Freight and insurance
                </text>
                <path d="M156 210 H190" className="s-ln" />
                <text x="196" y="214">
                  Product cost, linked to international benchmarks
                </text>
              </g>
              <text x="20" y="272" className="s-ts">
                Illustration, not to scale
              </text>
            </svg>
          </div>
          <div>
            <ul className="pp-ul">
              <li>
                <b>
                  Formula pricing.
                </b>
                {" "}
                <span>
                  Prices built from benchmarks, freight, taxes and margins, with each revision effective from a date and time.
                </span>
              </li>
              <li>
                <b>
                  Stock revaluation.
                </b>
                {" "}
                <span>
                  The effect of a price revision on stock value shown straight away.
                </span>
              </li>
              <li>
                <b>
                  Duties and levies.
                </b>
                {" "}
                <span>
                  Excise and other levies calculated on movements, in the right unit and at the right temperature basis.
                </span>
              </li>
              <li>
                <b>
                  Imports and currency.
                </b>
                {" "}
                <span>
                  Letters of credit, landed cost and exchange differences on every cargo.
                </span>
              </li>
              <li>
                <b>
                  Margin per litre.
                </b>
                {" "}
                <span>
                  Margin by product, channel, station, customer and region, after losses and distribution cost.
                </span>
              </li>
              <li>
                <b>
                  Credit control.
                </b>
                {" "}
                <span>
                  Dealer and commercial customer exposure checked before every load.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="migrate">
      <div className="in">
        <span className="eyebrow">
          ECC Oil & Gas to RISE with SAP
        </span>
        <h2>
          Running SAP ECC with Oil & Gas? The clock is running.
        </h2>
        <p className="lede">
          Many fuel marketers and terminal operators in the region run SAP ECC 6.0 with the Oil & Gas industry solution (IS-Oil). Mainstream maintenance for ECC ends in 2027. RISE with SAP moves you to SAP Cloud ERP Private, which carries the oil and gas industry solution forward on SAP S/4HANA.
        </p>
        <figure className="og-dead" aria-label="Timeline of SAP ECC maintenance milestones">
          <div className="pp-scroll">
            <svg viewBox="0 0 1100 170" role="img" aria-hidden="true">
              <path d="M40 90 H1060" stroke="var(--line)" strokeWidth="6" strokeLinecap="round" />
              <path d="M40 90 H440" stroke="#34b386" strokeWidth="6" strokeLinecap="round" />
              <path d="M440 90 H760" stroke="#e9730c" strokeWidth="6" />
              <path d="M760 90 H1060" stroke="#7a3f9c" strokeWidth="6" strokeLinecap="round" />
              <g fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="20" className="s-fg">
                <text x="40" y="60">
                  Today
                </text>
                <text x="410" y="60">
                  2027
                </text>
                <text x="730" y="60">
                  2030
                </text>
                <text x="1010" y="60">
                  2033
                </text>
              </g>
              <circle cx="440" cy="90" r="10" fill="#34b386" />
              <circle cx="760" cy="90" r="10" fill="#e9730c" />
              <circle cx="1050" cy="90" r="10" fill="#7a3f9c" />
              <circle cx="40" cy="90" r="16" fill="#34b386" className="a-pulse" opacity=".4" />
              <circle cx="40" cy="90" r="8" fill="#34b386" />
              <g fontFamily="Manrope, sans-serif" fontSize="12.5" fontWeight="700" className="s-mu" textAnchor="middle">
                <text x="240" y="122">
                  Plan and convert
                </text>
                <text x="600" y="122">
                  Extended maintenance, at extra cost
                </text>
                <text x="905" y="122">
                  Transition option, only within RISE
                </text>
                <text x="440" y="152" fill="#34b386">
                  Mainstream maintenance ends
                </text>
              </g>
            </svg>
          </div>
        </figure>
        <div className="og-paths">
          <div className="rec">
            <span className="k">
              Most common for IS-Oil
            </span>
            <h3>
              System conversion
            </h3>
            <p>
              Your ECC system, history and oil and gas data are converted to SAP S/4HANA and moved into RISE. Processes stay familiar and can be modernised after go-live.
            </p>
            <p className="og-fit">
              <b>
                Fits when
              </b>
              {" "}
              your processes are sound and you need years of movement and pricing history.
            </p>
          </div>
          <div>
            <span className="k">
              Keep the best, reset the rest
            </span>
            <h3>
              Selective data transition
            </h3>
            <p>
              A new S/4HANA system is built from your ECC configuration, and only chosen companies, years or data are brought across.
            </p>
            <p className="og-fit">
              <b>
                Fits when
              </b>
              {" "}
              you are merging entities, splitting businesses or cleaning up years of customisation.
            </p>
          </div>
          <div>
            <span className="k">
              Start clean
            </span>
            <h3>
              New implementation
            </h3>
            <p>
              SAP Cloud ERP Private is set up fresh on today's best practice, and open balances and master data are migrated.
            </p>
            <p className="og-fit">
              <b>
                Fits when
              </b>
              {" "}
              the ECC design no longer matches how the business works.
            </p>
          </div>
        </div>
        <h3 style={{ marginTop: "44px", fontSize: "22px" }}>
          What makes an oil and gas conversion different
        </h3>
        <div className="og-checks">
          <div>
            <i>
              01
            </i>
            <div>
              <h3>
                Oil and gas pre-conversion checks
              </h3>
              <p>
                SAP provides dedicated IS-Oil checks before conversion. They are run early and repeated before every trial run.
              </p>
            </div>
          </div>
          <div>
            <i>
              02
            </i>
            <div>
              <h3>
                Hydrocarbon data model changes
              </h3>
              <p>
                Quantity conversion and oil stock movements were redesigned in S/4HANA. Every product, unit and conversion group is checked and tested.
              </p>
            </div>
          </div>
          <div>
            <i>
              03
            </i>
            <div>
              <h3>
                Secondary distribution and retail add-ons
              </h3>
              <p>
                ECC secondary distribution can be converted to its S/4HANA successor. Station retail processes are mapped to SAP's current retail fuel network solution.
              </p>
            </div>
          </div>
          <div>
            <i>
              04
            </i>
            <div>
              <h3>
                Retired transactions and functions
              </h3>
              <p>
                Some older oil and gas transactions and reports no longer exist. Each one is matched to a replacement before go-live.
              </p>
            </div>
          </div>
          <div>
            <i>
              05
            </i>
            <div>
              <h3>
                Heavy custom code
              </h3>
              <p>
                Oil and gas ECC systems carry pricing, excise and interface code built over years. We analyse it, retire what standard now covers and fix the rest.
              </p>
            </div>
          </div>
          <div>
            <i>
              06
            </i>
            <div>
              <h3>
                Stock proven in every unit
              </h3>
              <p>
                Tank stock, open tickets, exchanges and duty balances are reconciled in litres, litres at 15°C and kilograms before and after each trial conversion.
              </p>
            </div>
          </div>
        </div>
        <ol className="pp-promise" style={{ marginTop: "28px" }}>
          <li>
            <i>
              1
            </i>
            <div>
              <b>
                Assess
              </b>
              <span>
                SAP Readiness Check, simplification items, oil and gas checks, custom code and interfaces. Result: a costed roadmap.
              </span>
            </div>
          </li>
          <li>
            <i>
              2
            </i>
            <div>
              <b>
                Prepare
              </b>
              <span>
                Clean up data, close old documents, convert customers and suppliers to business partners, fix oil and gas findings.
              </span>
            </div>
          </li>
          <li>
            <i>
              3
            </i>
            <div>
              <b>
                Trial conversions
              </b>
              <span>
                Usually two or three full rehearsals into the RISE environment, each timed and reconciled.
              </span>
            </div>
          </li>
          <li>
            <i>
              4
            </i>
            <div>
              <b>
                Test the oil and gas flows
              </b>
              <span>
                Cargo receipt, tank transfer, truck loading, station delivery, card settlement, duty and pricing, end to end.
              </span>
            </div>
          </li>
          <li>
            <i>
              5
            </i>
            <div>
              <b>
                Cut over and support
              </b>
              <span>
                A planned weekend cutover, then hypercare until stock, duty and margins tie out.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section className="light" id="edition">
      <div className="in">
        <span className="eyebrow">
          Which SAP fits
        </span>
        <h2>
          Not every downstream business needs the full oil and gas solution.
        </h2>
        <div className="og-ed">
          <table>
            <thead>
              <tr>
                <th>
                  Your business
                </th>
                <th>
                  What usually fits
                </th>
                <th>
                  Edition
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Fuel importer and marketer with terminals and a station network
                </td>
                <td>
                  Full oil and gas solution: quantity conversion, supply, secondary distribution and retail fuel network
                </td>
                <td>
                  <span className="tag o">
                    SAP CLOUD ERP PRIVATE
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  Running SAP ECC with Oil & Gas today
                </td>
                <td>
                  RISE with SAP, usually by system conversion
                </td>
                <td>
                  <span className="tag o">
                    SAP CLOUD ERP PRIVATE
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  Lubricant blender and distributor
                </td>
                <td>
                  Process manufacturing, batches, quality and distributor sales
                </td>
                <td>
                  <span className="tag">
                    SAP CLOUD ERP, TO CONFIRM IN FIT TO STANDARD
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  LPG filler and distributor
                </td>
                <td>
                  Filling, returnable cylinders, deposits and dealer sales
                </td>
                <td>
                  <span className="tag">
                    SAP CLOUD ERP OR PRIVATE, BY VOLUME AND SCOPE
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="pp-note">
          We confirm the edition only after fit to standard on your own processes.
        </p>
      </div>
    </section>
    <section id="platform">
      <div className="in">
        <span className="eyebrow">
          The platform
        </span>
        <h2>
          SAP at the core, connected to the forecourt and the field.
        </h2>
        <div className="pp-arch">
          <div className="pp-arow">
            <div className="lab">
              Field systems
            </div>
            <div className="cells">
              <div>
                <b>
                  Tank gauging and terminal automation
                </b>
                <span>
                  Levels, temperatures, gantry loads
                </span>
              </div>
              <div>
                <b>
                  Forecourt and POS
                </b>
                <span>
                  Meters, dips, shift and card sales
                </span>
              </div>
              <div>
                <b>
                  Truck telematics
                </b>
                <span>
                  Location and delivery proof
                </span>
              </div>
            </div>
          </div>
          <div className="pp-arow">
            <div className="lab">
              Connect
            </div>
            <div className="cells">
              <div>
                <b>
                  SAP Integration Suite
                </b>
                <span>
                  Field systems, banks, card clearing, regulators
                </span>
              </div>
            </div>
          </div>
          <div className="pp-arow core">
            <div className="lab">
              Run the business
            </div>
            <div className="cells">
              <div>
                <b>
                  SAP Cloud ERP Private
                </b>
                <span>
                  Oil and gas: supply, terminals, distribution, retail, finance
                </span>
              </div>
              <div>
                <b>
                  Joule
                </b>
                <span>
                  AI assistant and agents across SAP
                </span>
              </div>
            </div>
          </div>
          <div className="pp-arow">
            <div className="lab">
              Assets and safety
            </div>
            <div className="cells">
              <div>
                <b>
                  SAP Asset Performance Management
                </b>
                <span>
                  Condition and predictive maintenance
                </span>
              </div>
              <div>
                <b>
                  SAP Service and Asset Manager
                </b>
                <span>
                  Mobile maintenance in the field
                </span>
              </div>
              <div>
                <b>
                  SAP EHS
                </b>
                <span>
                  Incidents, permits, environment
                </span>
              </div>
            </div>
          </div>
          <div className="pp-arow">
            <div className="lab">
              Decide
            </div>
            <div className="cells">
              <div>
                <b>
                  SAP Analytics Cloud
                </b>
                <span>
                  Margin per litre, losses, station performance
                </span>
              </div>
              <div>
                <b>
                  SAP Business Data Cloud
                </b>
                <span>
                  One data foundation for AI
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pp-ai" style={{ marginTop: "28px" }}>
          <div>
            <span className="t">
              Retail
            </span>
            <h3>
              Station demand forecasts
            </h3>
            <p>
              Sales patterns by station, day and season drive replenishment before tanks run low.
            </p>
          </div>
          <div>
            <span className="t">
              Losses
            </span>
            <h3>
              Unusual variances flagged
            </h3>
            <p>
              Station and terminal variances that break pattern are raised for investigation.
            </p>
          </div>
          <div>
            <span className="t">
              Assets
            </span>
            <h3>
              Maintenance that predicts
            </h3>
            <p>
              Agents that turn sensor alerts into prioritised work orders for pumps and tanks.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="start">
      <div className="in">
        <span className="eyebrow">
          How we start
        </span>
        <h2>
          A focused assessment, then a clear plan.
        </h2>
        <div className="pp-start">
          <div>
            <span className="n">
              01
            </span>
            <h3>
              Walk the chain
            </h3>
            <p>
              We follow one cargo from vessel to station invoice, and one station day from dip to settlement.
            </p>
            <span className="d">
              Terminal, dispatch, retail and finance
            </span>
          </div>
          <div>
            <span className="n">
              02
            </span>
            <h3>
              Check your system
            </h3>
            <p>
              For ECC Oil & Gas users, a readiness check, oil and gas findings and a custom code view. For new users, fit to standard.
            </p>
            <span className="d">
              Findings you can act on
            </span>
          </div>
          <div>
            <span className="n">
              03
            </span>
            <h3>
              Roadmap
            </h3>
            <p>
              Edition, path, phases and timeline, with SAP's oil and gas specialists involved where it matters.
            </p>
            <span className="d">
              A plan you can take to the board
            </span>
          </div>
        </div>
      </div>
    </section>
    <CopyrightNotice inline />
    <section className="light" id="faq">
      <div className="in">
        <div className="pp-faq">
          <details>
            <summary>
              Can SAP Cloud ERP (public edition) run a fuel marketer?
            </summary>
            <p>
              Not with the full oil and gas features. Quantity conversion, secondary distribution and retail fuel network operations are part of the oil and gas solution on SAP Cloud ERP Private. Smaller lubricant or LPG businesses may fit the public edition, which we test in fit to standard.
            </p>
          </details>
          <details>
            <summary>
              We run ECC with Oil & Gas and many custom programs. Is conversion realistic?
            </summary>
            <p>
              Yes. Conversion is the most common path for oil and gas ECC systems. The work is in the preparation: oil and gas checks, data model changes and custom code. A readiness assessment tells you the size of that work before you commit.
            </p>
          </details>
          <details>
            <summary>
              Do our forecourt and tank systems have to change?
            </summary>
            <p>
              Usually not. They connect to SAP through SAP Integration Suite. We confirm each interface during the assessment.
            </p>
          </details>
          <details>
            <summary>
              Does SAP handle Sri Lankan taxes and levies?
            </summary>
            <p>
              Sri Lanka is supported through local localisation rather than delivered by SAP. Duties and levies on fuel are set up in the oil and gas solution and confirmed with your finance team.
            </p>
          </details>
        </div>
        <details className="og-src">
          <summary>
            Sources
          </summary>
          <ul>
            <li>
              <a href="https://www.sap.com/uk/industries/oil-gas-energy.html" target="_blank" rel="noopener">
                SAP: Oil, gas and energy industry solutions
              </a>
            </li>
            <li>
              <a href="https://blogs.sap.com/2021/11/08/september-2021-new-sap-cloud-private-edition-items-are-just-released-for-the-oil-gas-and-energy-industry/" target="_blank" rel="noopener">
                SAP: Secondary Distribution Management and Retail Fuel Network Operations on Cloud Private Edition
              </a>
            </li>
            <li>
              <a href="https://community.sap.com/t5/sap-for-oil-gas-and-energy-blog-posts/secondary-distribution-and-fuels-retailing-new-s-4hana-release-now-with/ba-p/13395568" target="_blank" rel="noopener">
                SAP Community: Secondary distribution and fuels retailing on S/4HANA
              </a>
            </li>
            <li>
              <a href="https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/quantity-conversion-challenges-in-the-oil-gas-industry/ba-p/13478909" target="_blank" rel="noopener">
                SAP Community: Quantity conversion in oil and gas
              </a>
            </li>
            <li>
              <a href="https://blogs.sap.com/2017/02/26/s4-hana-1610-system-conversion-for-oil-gas-customer/" target="_blank" rel="noopener">
                SAP Community: S/4HANA system conversion for an oil and gas customer
              </a>
            </li>
            <li>
              <a href="https://blogs.sap.com/2017/12/11/feature-pack-01-released-for-s4scsd-1.0/" target="_blank" rel="noopener">
                SAP Community: Converting ECC with secondary distribution to S/4HANA
              </a>
            </li>
            <li>
              <a href="https://sapinsider.org/scheduling-oil-and-gas-trades-an-sap-tsw-perspective/" target="_blank" rel="noopener">
                SAPinsider: SAP Traders' and Schedulers' Workbench
              </a>
            </li>
            <li>
              <a href="https://counterpoint.lk/sri-lanka-clears-global-oil-giants-entry-retail-fuel-market/" target="_blank" rel="noopener">
                Counterpoint: Sri Lanka clears global oil companies' entry to fuel retail
              </a>
            </li>
            <li>
              <a href="https://www.newsfirst.lk/2026/03/18/fuel-distribution-disparities-emerge-as-private-companies-face-scrutiny/" target="_blank" rel="noopener">
                News 1st: Fuel distribution scrutiny, March 2026
              </a>
            </li>
          </ul>
        </details>
      </div>
    </section>
    <section id="book">
      <div className="in">
        <div className="cta-band">
          <div>
            <span className="eyebrow">
              Next step
            </span>
            <h2>
              Let's walk one cargo from vessel to forecourt together.
            </h2>
            <p className="lede" style={{ color: "#a9bab2" }}>
              A working session with our SAP consultants. If you run ECC Oil & Gas, bring your system questions too. You leave with the options, the risks and a first plan.
            </p>
            <div style={{ marginTop: "28px" }}>
              <Link href="/contact" className="btn pri">
                Book a session →
              </Link>
            </div>
          </div>
          <ul style={{ color: "#eef3f0" }}>
            <li>
              Your value chain mapped
            </li>
            <li>
              The right edition and path
            </li>
            <li>
              A first roadmap and timeline
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
}
