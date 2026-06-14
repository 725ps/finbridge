// FinOps Command Center - Mock Data
// Structured per the ontology: Organizations, Systems, Processes, Instances, People, Metrics
window.FINOPS_DATA = {

// ============ BRANDS ============
brands: {
  TOY: { name:"Toyota", color:"#EB0A1E", initial:"T" },
  LEX: { name:"Lexus", color:"#1A1A1A", initial:"L" },
  HON: { name:"Honda", color:"#CC0000", initial:"H" },
  VOL: { name:"Volvo", color:"#003057", initial:"V" },
  BYD: { name:"BYD", color:"#1E4D8C", initial:"B" },
  STE: { name:"Stellantis", color:"#243B80", initial:"S" },
},

countries: {
  UAE: { name:"UAE", flag:"🇦🇪", currency:"AED" },
  KSA: { name:"Saudi Arabia", flag:"🇸🇦", currency:"SAR" },
  KWT: { name:"Kuwait", flag:"🇰🇼", currency:"KWD" },
  QAT: { name:"Qatar", flag:"🇶🇦", currency:"QAR" },
  BHR: { name:"Bahrain", flag:"🇧🇭", currency:"BHD" },
  OMN: { name:"Oman", flag:"🇴🇲", currency:"OMR" },
  EGY: { name:"Egypt", flag:"🇪🇬", currency:"EGP" },
  PAK: { name:"Pakistan", flag:"🇵🇰", currency:"PKR" },
},

// ============ ORGANIZATION HIERARCHY ============
organizations: {
  id:"AF-GROUP", name:"Al-Futtaim Group", level:"group",
  children: [{
    id:"AF-AUTO", name:"Al-Futtaim Automotive", level:"division",
    children: [
      // 20 Legal Entities
      { id:"TOY-UAE", brand:"TOY", country:"UAE", level:"brand_country", is_legal_entity:true, close_target_days:5,
        locations: [
          { id:"DXB-MALL", name:"Toyota Dubai Mall", type:"Showroom", city:"Dubai", region:"Dubai" },
          { id:"DXB-DEIRA", name:"Toyota Deira", type:"Showroom", city:"Dubai", region:"Dubai" },
          { id:"DXB-FC", name:"Toyota Festival City", type:"Showroom", city:"Dubai", region:"Dubai" },
          { id:"DXB-QUOZ", name:"Toyota Al Quoz", type:"Service Center", city:"Dubai", region:"Dubai" },
          { id:"DXB-DIP", name:"Toyota DIP Parts", type:"Parts Warehouse", city:"Dubai", region:"Dubai" },
          { id:"AUTO-QUS", name:"Auto Center Qusais", type:"Multi-brand Service", city:"Dubai", region:"Dubai" },
          { id:"AUH-MUS", name:"Toyota Musaffah", type:"Combined", city:"Abu Dhabi", region:"Abu Dhabi" },
          { id:"AUH-KHL", name:"Toyota Khalidiya", type:"Showroom", city:"Abu Dhabi", region:"Abu Dhabi" },
          { id:"ALN", name:"Toyota Al Ain", type:"Combined", city:"Al Ain", region:"Al Ain" },
          { id:"SHJ-SH", name:"Toyota Sharjah", type:"Showroom", city:"Sharjah", region:"Sharjah" },
          { id:"SHJ-SVC", name:"Toyota Sharjah Service", type:"Service Center", city:"Sharjah", region:"Sharjah" },
          { id:"RAK", name:"Toyota RAK", type:"Combined", city:"RAK", region:"Northern Emirates" },
        ]
      },
      { id:"LEX-UAE", brand:"LEX", country:"UAE", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"LEX-DXB", name:"Lexus Dubai", type:"Showroom", city:"Dubai" },
        { id:"LEX-AUH", name:"Lexus Abu Dhabi", type:"Showroom", city:"Abu Dhabi" },
        { id:"LEX-SVC", name:"Lexus Service Center", type:"Service Center", city:"Dubai" },
      ]},
      { id:"HON-UAE", brand:"HON", country:"UAE", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"HON-DXB", name:"Honda Dubai", type:"Showroom", city:"Dubai" },
        { id:"HON-AUH", name:"Honda Abu Dhabi", type:"Showroom", city:"Abu Dhabi" },
        { id:"HON-SVC", name:"Honda Service Center", type:"Service Center", city:"Dubai" },
      ]},
      { id:"VOL-UAE", brand:"VOL", country:"UAE", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"VOL-DXB", name:"Volvo Dubai", type:"Showroom", city:"Dubai" },
        { id:"VOL-SVC", name:"Volvo Service Center", type:"Service Center", city:"Dubai" },
      ]},
      { id:"BYD-UAE", brand:"BYD", country:"UAE", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"BYD-DXB", name:"BYD Dubai", type:"Showroom", city:"Dubai" },
      ]},
      { id:"STE-UAE", brand:"STE", country:"UAE", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"STE-DXB", name:"Stellantis Dubai", type:"Showroom", city:"Dubai" },
        { id:"STE-SVC", name:"Stellantis Service", type:"Service Center", city:"Dubai" },
      ]},
      { id:"TOY-KSA", brand:"TOY", country:"KSA", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-RUH", name:"Toyota Riyadh", type:"Combined", city:"Riyadh" },
        { id:"TOY-JED", name:"Toyota Jeddah", type:"Combined", city:"Jeddah" },
        { id:"TOY-DAM", name:"Toyota Dammam", type:"Combined", city:"Dammam" },
      ]},
      { id:"LEX-KSA", brand:"LEX", country:"KSA", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"LEX-RUH", name:"Lexus Riyadh", type:"Showroom", city:"Riyadh" },
      ]},
      { id:"HON-KSA", brand:"HON", country:"KSA", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"HON-RUH", name:"Honda Riyadh", type:"Combined", city:"Riyadh" },
        { id:"HON-JED", name:"Honda Jeddah", type:"Combined", city:"Jeddah" },
      ]},
      { id:"TOY-KWT", brand:"TOY", country:"KWT", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-KWC", name:"Toyota Kuwait City", type:"Combined", city:"Kuwait City" },
      ]},
      { id:"LEX-KWT", brand:"LEX", country:"KWT", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"LEX-KWC", name:"Lexus Kuwait City", type:"Showroom", city:"Kuwait City" },
      ]},
      { id:"HON-KWT", brand:"HON", country:"KWT", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"HON-KWC", name:"Honda Kuwait City", type:"Showroom", city:"Kuwait City" },
      ]},
      { id:"TOY-QAT", brand:"TOY", country:"QAT", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-DOH", name:"Toyota Doha", type:"Combined", city:"Doha" },
      ]},
      { id:"LEX-QAT", brand:"LEX", country:"QAT", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"LEX-DOH", name:"Lexus Doha", type:"Showroom", city:"Doha" },
      ]},
      { id:"TOY-BHR", brand:"TOY", country:"BHR", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-MAN", name:"Toyota Manama", type:"Combined", city:"Manama" },
      ]},
      { id:"TOY-OMN", brand:"TOY", country:"OMN", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-MUS", name:"Toyota Muscat", type:"Combined", city:"Muscat" },
      ]},
      { id:"STE-KSA", brand:"STE", country:"KSA", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"STE-RUH", name:"Stellantis Riyadh", type:"Combined", city:"Riyadh" },
      ]},
      { id:"VOL-KSA", brand:"VOL", country:"KSA", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"VOL-RUH", name:"Volvo Riyadh", type:"Showroom", city:"Riyadh" },
      ]},
      { id:"TOY-EGY", brand:"TOY", country:"EGY", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-CAI", name:"Toyota Cairo", type:"Combined", city:"Cairo" },
        { id:"TOY-ALX", name:"Toyota Alexandria", type:"Combined", city:"Alexandria" },
      ]},
      { id:"TOY-PAK", brand:"TOY", country:"PAK", level:"brand_country", is_legal_entity:true, close_target_days:5, locations:[
        { id:"TOY-KHI", name:"Toyota Karachi", type:"Combined", city:"Karachi" },
        { id:"TOY-LHR", name:"Toyota Lahore", type:"Combined", city:"Lahore" },
      ]},
    ]
  }]
},

// ============ SYSTEMS ============
systems: [
  { id:"S4", name:"SAP S/4HANA", tier:"core", desc:"Central ERP backbone. ACDOCA Universal Journal. FI/CO/MM/SD modules.", owner:"Finance IT Lead", color:"#1B4D8C", dataSources:"Receives from DMS, AP, Concur, Payroll, Bank, Tax, Treasury", lastSync:"2026-06-05 14:32", syncStatus:"healthy" },
  { id:"DMS", name:"Dealer Management System", tier:"peripheral", desc:"Vehicle sales (desking, F&I), service ROs, parts inventory. Syncs daily to S/4HANA.", owner:"IT Operations Manager", color:"#7C3AED", dataSources:"POS terminals, service bay tablets, e-commerce orders (continuous → daily batch to S/4HANA)", lastSync:"2026-06-03 02:15", syncStatus:"failed" },
  { id:"AP", name:"SAP Ariba (AP Automation)", tier:"peripheral", desc:"Invoice capture (OCR), 3-way PO matching, approval routing. Posts to S/4HANA FI.", owner:"AP Manager", color:"#059669", dataSources:"Vendor invoices (email, EDI, supplier portal), OCR pipeline", lastSync:"2026-06-05 14:32", syncStatus:"healthy" },
  { id:"BANK", name:"Bank Connectivity (MBC)", tier:"peripheral", desc:"Payment file dispatch to banks. Bank statement import for reconciliation.", owner:"Treasury Analyst", color:"#0891B2", dataSources:"Bank SFTP statement files (MT940), partner bank APIs", lastSync:"2026-06-05 06:12", syncStatus:"healthy" },
  { id:"CONCUR", name:"SAP Concur", tier:"peripheral", desc:"Employee expense claims, travel. Approval workflows, policy enforcement.", owner:"AP Team Lead", color:"#6366F1", dataSources:"Employee mobile app submissions, corporate card feeds", lastSync:"2026-06-05 23:15", syncStatus:"healthy" },
  { id:"SF", name:"SAP SuccessFactors", tier:"peripheral", desc:"Payroll calculation, salary, overtime, commission, EOS benefits. Posts journal to S/4HANA.", owner:"HR Finance Manager", color:"#EA580C", dataSources:"HR master data, time & attendance, overtime approvals", lastSync:"2026-06-01 06:00", syncStatus:"delayed" },
  { id:"TAX", name:"Tax Engine (DRC)", tier:"bidirectional", desc:"VAT/GST calculation per transaction. Period-end tax accruals. Multi-country compliance.", owner:"Tax Manager", color:"#DC2626", dataSources:"Reads transaction data from S/4HANA; tax rate tables per country", lastSync:"2026-06-05 12:00", syncStatus:"healthy" },
  { id:"TREASURY", name:"Treasury / TRM", tier:"bidirectional", desc:"Cash positioning, FX hedging, bank reconciliation, IC netting. Reads and writes to S/4HANA.", owner:"Treasury Manager", color:"#2563EB", dataSources:"Reads GL balances from S/4HANA; FX rate feeds, bank position files", lastSync:"2026-06-05 08:00", syncStatus:"healthy" },
  { id:"GRP", name:"SAP Group Reporting", tier:"downstream", desc:"Multi-entity consolidation. IC elimination, currency conversion, group adjustments.", owner:"Group Controller", color:"#7C3AED", dataSources:"Reads entity financials from S/4HANA on entity close", lastSync:"Pending close", syncStatus:"waiting" },
  { id:"SAC", name:"SAP Analytics Cloud", tier:"downstream", desc:"Financial planning, budgeting, forecasting. Variance analysis (actuals vs plan).", owner:"FP&A Manager", color:"#0D9488", dataSources:"Reads actuals from S/4HANA; budget/forecast user inputs", lastSync:"2026-06-05 09:00", syncStatus:"healthy" },
  { id:"GRC", name:"SAP GRC", tier:"supporting", desc:"Segregation of duties. Access controls. Audit management. Compliance monitoring.", owner:"Internal Audit Lead", color:"#64748B", dataSources:"Reads user roles & access logs from all systems", lastSync:"2026-06-05 07:00", syncStatus:"healthy" },
],

integrations: [
  { id:"INT-DMS-S4", from:"DMS", to:"S4", direction:"inbound", label:"Vehicle sales, service ROs, parts movements", freq:"Daily 02:00 UTC", method:"API batch / RFC", lastSync:"2026-06-03 02:15", records:1247, status:"failed", error:"API timeout on Jeddah batch (34 txns). Data validation failure on Riyadh (13 ROs missing cost center)." },
  { id:"INT-AP-S4", from:"AP", to:"S4", direction:"inbound", label:"Matched & approved invoices → AP journal entries", freq:"Real-time per invoice", method:"Direct posting", lastSync:"2026-06-05 14:32", records:287, status:"healthy" },
  { id:"INT-CONCUR-S4", from:"CONCUR", to:"S4", direction:"inbound", label:"Approved expense claims → GL postings", freq:"Daily 23:00", method:"File transfer", lastSync:"2026-06-05 23:15", records:64, status:"healthy" },
  { id:"INT-SF-S4", from:"SF", to:"S4", direction:"inbound", label:"Payroll calculation → salary journal entries", freq:"Monthly Day 1", method:"Payroll journal batch", lastSync:"2026-06-01 06:00", records:1, status:"delayed", error:"Pakistan payroll pending: HR approval for overtime calculation not received." },
  { id:"INT-BANK-S4", from:"BANK", to:"S4", direction:"inbound", label:"Bank statements loaded for reconciliation", freq:"Daily 06:00", method:"MT940 file import", lastSync:"2026-06-05 06:12", records:18, status:"healthy" },
  { id:"INT-S4-TAX", from:"S4", to:"TAX", direction:"outbound", label:"Transaction data for tax calculation", freq:"On-demand + monthly batch", method:"API", lastSync:"2026-06-05 12:00", records:4200, status:"healthy" },
  { id:"INT-TAX-S4", from:"TAX", to:"S4", direction:"inbound", label:"Tax accrual postings", freq:"Monthly at close", method:"Journal batch", lastSync:"Pending", records:0, status:"waiting" },
  { id:"INT-S4-TREASURY", from:"S4", to:"TREASURY", direction:"outbound", label:"GL balances for cash positioning & bank rec", freq:"Daily", method:"CDS View API", lastSync:"2026-06-05 08:00", records:340, status:"healthy" },
  { id:"INT-TREASURY-S4", from:"TREASURY", to:"S4", direction:"inbound", label:"FX revaluation entries", freq:"Monthly at close", method:"Journal batch", lastSync:"Pending", records:0, status:"waiting" },
  { id:"INT-S4-GRP", from:"S4", to:"GRP", direction:"outbound", label:"Entity financial data package for consolidation", freq:"On entity close", method:"Data extraction", lastSync:"Pending", records:0, status:"waiting" },
  { id:"INT-S4-SAC", from:"S4", to:"SAC", direction:"outbound", label:"Actuals for variance analysis vs budget", freq:"Daily / on-demand", method:"Live connection", lastSync:"2026-06-05 09:00", records:1800, status:"healthy" },
],

// ============ PROCESS TEMPLATES ============
processTemplates: [
  {
    id:"PROC-MONTHLY", name:"Monthly Financial Close", targetDays:5, frequency:"monthly",
    subProcesses: [
      { id:"SP-DMS", name:"DMS Reconciliation", systemId:"DMS", phase:1,
        tasks: [
          { id:"T-DMS-VERIFY", name:"DMS daily sync verification", ownerRole:"IT Operations", effortHrs:1, targetDay:1, dependsOn:[], deliverable:"All showroom/service transactions synced to S/4HANA" },
        ]},
      { id:"SP-AP", name:"Accounts Payable Close", systemId:"AP", phase:1,
        tasks: [
          { id:"T-AP-CUTOFF", name:"Invoice processing cutoff", ownerRole:"AP Manager", effortHrs:2, targetDay:2, dependsOn:[], deliverable:"All invoices received, matched, posted" },
          { id:"T-AP-GRNI", name:"GRNI accruals", ownerRole:"AP Manager", effortHrs:2, targetDay:2, dependsOn:["T-AP-CUTOFF"], deliverable:"Received-not-invoiced accruals posted" },
        ]},
      { id:"SP-AR", name:"Accounts Receivable Close", systemId:"S4", phase:1,
        tasks: [
          { id:"T-AR-BILL", name:"Billing completion", ownerRole:"AR Manager", effortHrs:2, targetDay:2, dependsOn:["T-DMS-VERIFY"], deliverable:"All vehicle/service/parts invoices raised" },
          { id:"T-AR-BAD", name:"Bad debt provision", ownerRole:"AR Manager", effortHrs:1, targetDay:2, dependsOn:["T-AR-BILL"], deliverable:"Doubtful debt provisions updated" },
        ]},
      { id:"SP-PAY", name:"Payroll & HR", systemId:"SF", phase:1,
        tasks: [
          { id:"T-PAY-CALC", name:"Payroll calculation", ownerRole:"HR Finance", effortHrs:2, targetDay:1, dependsOn:[], deliverable:"Salary, OT, commission, EOS calculated" },
          { id:"T-PAY-POST", name:"Payroll posting to GL", ownerRole:"HR Finance", effortHrs:1, targetDay:2, dependsOn:["T-PAY-CALC"], deliverable:"Payroll journal posted to S/4HANA FI" },
        ]},
      { id:"SP-ASSET", name:"Assets & Depreciation", systemId:"S4", phase:1,
        tasks: [
          { id:"T-ASSET-DEPR", name:"Depreciation run", ownerRole:"Asset Accountant", effortHrs:1, targetDay:1, dependsOn:[], deliverable:"Monthly depreciation posted" },
          { id:"T-ASSET-RECON", name:"Asset register reconciliation", ownerRole:"Asset Accountant", effortHrs:1, targetDay:2, dependsOn:["T-ASSET-DEPR"], deliverable:"Asset register matches GL" },
        ]},
      { id:"SP-INV", name:"Inventory Reconciliation", systemId:"S4", phase:1,
        tasks: [
          { id:"T-INV-RECON", name:"Stock count reconciliation", ownerRole:"Inventory Controller", effortHrs:3, targetDay:2, dependsOn:["T-DMS-VERIFY"], deliverable:"Physical count matches system" },
          { id:"T-INV-WD", name:"Obsolete/damaged write-downs", ownerRole:"Inventory Controller", effortHrs:1, targetDay:2, dependsOn:["T-INV-RECON"], deliverable:"Write-downs posted" },
        ]},
      { id:"SP-EXP", name:"Expense Processing", systemId:"CONCUR", phase:1,
        tasks: [
          { id:"T-EXP-PROC", name:"Expense claim processing", ownerRole:"AP Team", effortHrs:1, targetDay:1, dependsOn:[], deliverable:"All claims processed" },
          { id:"T-EXP-ACC", name:"Outstanding claims accrual", ownerRole:"AP Team", effortHrs:0.5, targetDay:2, dependsOn:["T-EXP-PROC"], deliverable:"Accruals for pending claims posted" },
        ]},
      { id:"SP-BANK", name:"Bank Reconciliation", systemId:"TREASURY", phase:2,
        tasks: [
          { id:"T-BANK-IMP", name:"Bank statement import", ownerRole:"Treasury Analyst", effortHrs:1, targetDay:2, dependsOn:[], deliverable:"All bank statements loaded" },
          { id:"T-BANK-REC", name:"Bank reconciliation", ownerRole:"Treasury Analyst", effortHrs:3, targetDay:3, dependsOn:["T-BANK-IMP","T-AP-GRNI"], deliverable:"All items matched" },
        ]},
      { id:"SP-IC", name:"Intercompany Reconciliation", systemId:"TREASURY", phase:2,
        tasks: [
          { id:"T-IC-MATCH", name:"IC balance matching", ownerRole:"IC Accountant", effortHrs:4, targetDay:3, dependsOn:["T-AR-BILL"], deliverable:"All IC balances matched between entities" },
          { id:"T-IC-RESOLVE", name:"IC difference resolution", ownerRole:"IC Accountant", effortHrs:2, targetDay:3, dependsOn:["T-IC-MATCH"], deliverable:"All differences resolved" },
        ]},
      { id:"SP-TAX", name:"Tax & Compliance", systemId:"TAX", phase:2,
        tasks: [
          { id:"T-TAX-CALC", name:"VAT/GST calculation", ownerRole:"Tax Manager", effortHrs:2, targetDay:3, dependsOn:["T-AR-BILL","T-DMS-VERIFY"], deliverable:"Tax calculated for the period" },
          { id:"T-TAX-POST", name:"Tax accruals posting", ownerRole:"Tax Manager", effortHrs:1, targetDay:3, dependsOn:["T-TAX-CALC"], deliverable:"Tax provisions posted to GL" },
        ]},
      { id:"SP-FX", name:"Currency Revaluation", systemId:"TREASURY", phase:2,
        tasks: [
          { id:"T-FX-REVAL", name:"Currency revaluation", ownerRole:"Treasury Manager", effortHrs:1, targetDay:3, dependsOn:["T-BANK-REC"], deliverable:"Open FX items revalued at closing rate" },
        ]},
      { id:"SP-PROV", name:"Provisions & Accruals", systemId:"S4", phase:2,
        tasks: [
          { id:"T-PROV-UPD", name:"Provisions review & posting", ownerRole:"Financial Controller", effortHrs:2, targetDay:3, dependsOn:["T-AR-BAD"], deliverable:"Warranty, legal, bonus provisions updated" },
        ]},
      { id:"SP-REVIEW", name:"Entity Review & Close", systemId:"S4", phase:3,
        tasks: [
          { id:"T-TB-REVIEW", name:"Trial balance review", ownerRole:"Financial Controller", effortHrs:2, targetDay:4, dependsOn:["T-BANK-REC","T-IC-RESOLVE","T-TAX-POST","T-FX-REVAL","T-PROV-UPD","T-PAY-POST","T-EXP-ACC","T-ASSET-RECON","T-INV-WD"], deliverable:"TB reviewed, anomalies investigated" },
          { id:"T-MGMT-ADJ", name:"Management adjustments", ownerRole:"Financial Controller", effortHrs:1, targetDay:4, dependsOn:["T-TB-REVIEW"], deliverable:"Reclassifications, corrections posted" },
          { id:"T-VARIANCE", name:"Variance analysis", ownerRole:"FP&A Analyst", effortHrs:2, targetDay:4, dependsOn:["T-TB-REVIEW"], deliverable:"Actuals vs budget commentary" },
          { id:"T-SIGNOFF", name:"Entity sign-off", ownerRole:"Financial Controller", effortHrs:0.5, targetDay:4, dependsOn:["T-MGMT-ADJ","T-VARIANCE"], deliverable:"Controller certifies entity CLOSED" },
        ]},
      { id:"SP-CONSOL", name:"Group Consolidation", systemId:"GRP", phase:4, groupLevel:true,
        tasks: [
          { id:"T-CON-COLLECT", name:"Data collection from entities", ownerRole:"Group Accountant", effortHrs:1, targetDay:5, dependsOn:["T-SIGNOFF"], dependsOnAllEntities:true, deliverable:"All entity data pulled" },
          { id:"T-CON-ELIM", name:"IC elimination", ownerRole:"Group Accountant", effortHrs:3, targetDay:5, dependsOn:["T-CON-COLLECT"], deliverable:"IC revenue, cost, balances eliminated" },
          { id:"T-CON-FX", name:"Currency conversion", ownerRole:"Group Accountant", effortHrs:1, targetDay:5, dependsOn:["T-CON-COLLECT"], deliverable:"Local currency to AED at closing rate" },
          { id:"T-CON-ADJ", name:"Group adjustments", ownerRole:"Group Controller", effortHrs:2, targetDay:5, dependsOn:["T-CON-ELIM","T-CON-FX"], deliverable:"Goodwill, minorities, group provisions" },
          { id:"T-CON-STMTS", name:"Consolidated statements", ownerRole:"Group Controller", effortHrs:2, targetDay:5, dependsOn:["T-CON-ADJ"], deliverable:"Group P&L, BS, Cash Flow produced" },
        ]},
      { id:"SP-REPORT", name:"Management Reporting", systemId:"SAC", phase:4, groupLevel:true,
        tasks: [
          { id:"T-RPT-DASH", name:"Dashboard update", ownerRole:"FP&A Manager", effortHrs:2, targetDay:5, dependsOn:["T-CON-STMTS"], deliverable:"Dashboards refreshed with actuals" },
          { id:"T-RPT-BOARD", name:"Board pack preparation", ownerRole:"FP&A Manager", effortHrs:3, targetDay:5, dependsOn:["T-CON-STMTS"], deliverable:"Board pack ready for review" },
        ]},
    ],
  },
  {
    id:"PROC-QUARTERLY", name:"Quarterly Financial Close", targetDays:7, frequency:"quarterly",
    includesTemplate:"PROC-MONTHLY",
    additionalSubProcesses: [
      { id:"SP-Q-PROV", name:"Quarterly Provisions Review", systemId:"S4", tasks:[
        { id:"T-Q-PROV", name:"Quarterly provisions deep review", ownerRole:"Financial Controller", effortHrs:3, dependsOn:["T-CON-STMTS"] },
      ]},
      { id:"SP-Q-COMPLY", name:"Quarterly Compliance Returns", systemId:"TAX", tasks:[
        { id:"T-Q-COMPLY", name:"Quarterly compliance filings", ownerRole:"Tax Manager", effortHrs:4, dependsOn:["T-CON-STMTS"] },
      ]},
      { id:"SP-Q-BOARD", name:"Quarterly Board Reporting", systemId:"SAC", tasks:[
        { id:"T-Q-BOARD", name:"Quarterly board pack & presentation", ownerRole:"FP&A Manager", effortHrs:6, dependsOn:["T-CON-STMTS"] },
      ]},
      { id:"SP-Q-FCST", name:"Forecast Update", systemId:"SAC", tasks:[
        { id:"T-Q-FCST", name:"Rolling forecast update (next 2 quarters)", ownerRole:"FP&A Analyst", effortHrs:4, dependsOn:["T-CON-STMTS"] },
      ]},
    ],
  },
  {
    id:"PROC-ANNUAL", name:"Annual Financial Close", targetDays:15, frequency:"annual",
    includesTemplate:"PROC-QUARTERLY",
    additionalSubProcesses: [
      { id:"SP-A-AUDIT", name:"Audit Preparation", systemId:"S4", tasks:[
        { id:"T-A-AUDIT", name:"Audit preparation & support", ownerRole:"Internal Audit Lead", effortHrs:20 },
      ]},
      { id:"SP-A-STAT", name:"Statutory Financial Statements", systemId:"S4", tasks:[
        { id:"T-A-STAT", name:"Statutory accounts preparation", ownerRole:"Group Controller", effortHrs:16 },
      ]},
      { id:"SP-A-TAX", name:"Annual Tax Returns", systemId:"TAX", tasks:[
        { id:"T-A-TAX", name:"Annual tax return preparation (per country)", ownerRole:"Tax Manager", effortHrs:12 },
      ]},
      { id:"SP-A-BUDGET", name:"Next Year Budget", systemId:"SAC", tasks:[
        { id:"T-A-BUDGET", name:"Budget finalization for next FY", ownerRole:"FP&A Manager", effortHrs:10 },
      ]},
    ],
  },
],

// ============ ACTIVE CLOSE CYCLE (June 2026) ============
instanceTree: {
  id:"PI-FY2026", templateId:"PROC-ANNUAL", name:"FY2026 Annual Close", status:"in_progress", pct:23, periodType:"annual",
  children: [
    { id:"PI-Q1", name:"Q1 2026", status:"closed", pct:100, periodType:"quarterly", closedDate:"2026-04-06",
      addOns:[{name:"Q1 Provisions",status:"closed"},{name:"Q1 Compliance",status:"closed"},{name:"Q1 Board Report",status:"closed"},{name:"Q1 Forecast",status:"closed"}],
      children: [
        { id:"PI-JAN", name:"January 2026", status:"closed", pct:100, periodType:"monthly", closedDate:"2026-02-05", closeDays:4 },
        { id:"PI-FEB", name:"February 2026", status:"closed", pct:100, periodType:"monthly", closedDate:"2026-03-05", closeDays:5 },
        { id:"PI-MAR", name:"March 2026", status:"closed", pct:100, periodType:"monthly", closedDate:"2026-04-04", closeDays:4 },
      ]},
    { id:"PI-Q2", name:"Q2 2026", status:"in_progress", pct:67, periodType:"quarterly",
      addOns:[{name:"Q2 Provisions",status:"waiting"},{name:"Q2 Compliance",status:"waiting"},{name:"Q2 Board Report",status:"waiting"},{name:"Q2 Forecast",status:"waiting"}],
      children: [
        { id:"PI-APR", name:"April 2026", status:"closed", pct:100, periodType:"monthly", closedDate:"2026-05-05", closeDays:5 },
        { id:"PI-MAY", name:"May 2026", status:"closed", pct:100, periodType:"monthly", closedDate:"2026-06-04", closeDays:4 },
        { id:"PI-JUN", name:"June 2026", status:"in_progress", pct:59, periodType:"monthly", active:true, currentDay:3, targetDays:5 },
      ]},
    { id:"PI-Q3", name:"Q3 2026", status:"not_started", pct:0, periodType:"quarterly", children:[] },
    { id:"PI-Q4", name:"Q4 2026", status:"not_started", pct:0, periodType:"quarterly", children:[] },
  ]
},

// Entity statuses for June 2026 close
entityStatuses: [
  {"id":"TOY-UAE","pct":56,"status":"at_risk","tasksDone":14,"tasksTotal":25,"blocked":1,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"blocked","T-IC-RESOLVE":"waiting","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"in_progress","T-PROV-UPD":"in_progress","T-TB-REVIEW":"waiting","T-MGMT-ADJ":"waiting","T-VARIANCE":"waiting","T-SIGNOFF":"waiting"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"blocked","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"in_progress","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"waiting","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}],"blocker":{"task":"IC Balance Matching","desc":"AED 340K mismatch between Toyota UAE and Central Procurement. 3 vehicles received by Toyota UAE but goods receipt not posted in S/4HANA (DMS recorded receipt, SAP sync missed them).","resolution":"Post 3 missing goods receipts in S/4HANA MM.","resolutionAssignee":"Fatima Al-Hashemi (Inventory Controller)","estEffort":"30 minutes","taskId":"T-IC-MATCH","subProcess":"SP-IC","blocks":["IC Difference Resolution","Entity Review","Consolidation"]}},
  {"id":"LEX-UAE","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"HON-UAE","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"VOL-UAE","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"BYD-UAE","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"STE-UAE","pct":56,"status":"on_track","tasksDone":14,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"in_progress","T-IC-RESOLVE":"in_progress","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"in_progress","T-PROV-UPD":"in_progress","T-TB-REVIEW":"not_started","T-MGMT-ADJ":"not_started","T-VARIANCE":"not_started","T-SIGNOFF":"not_started"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"in_progress","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"in_progress","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"not_started","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"TOY-KSA","pct":0,"status":"at_risk","tasksDone":0,"tasksTotal":25,"blocked":1,"taskStates":{"T-DMS-VERIFY":"blocked","T-AP-CUTOFF":"not_started","T-AP-GRNI":"not_started","T-AR-BILL":"waiting","T-AR-BAD":"waiting","T-PAY-CALC":"in_progress","T-PAY-POST":"not_started","T-ASSET-DEPR":"in_progress","T-ASSET-RECON":"not_started","T-INV-RECON":"waiting","T-INV-WD":"waiting","T-EXP-PROC":"in_progress","T-EXP-ACC":"not_started","T-BANK-IMP":"not_started","T-BANK-REC":"not_started","T-IC-MATCH":"waiting","T-IC-RESOLVE":"waiting","T-TAX-CALC":"waiting","T-TAX-POST":"waiting","T-FX-REVAL":"not_started","T-PROV-UPD":"waiting","T-TB-REVIEW":"waiting","T-MGMT-ADJ":"waiting","T-VARIANCE":"waiting","T-SIGNOFF":"waiting"},"subProcessStatuses":[{"id":"SP-DMS","status":"blocked","pct":0},{"id":"SP-AP","status":"not_started","pct":0},{"id":"SP-AR","status":"waiting","pct":0},{"id":"SP-PAY","status":"in_progress","pct":0},{"id":"SP-ASSET","status":"in_progress","pct":0},{"id":"SP-INV","status":"waiting","pct":0},{"id":"SP-EXP","status":"in_progress","pct":0},{"id":"SP-BANK","status":"not_started","pct":0},{"id":"SP-IC","status":"waiting","pct":0},{"id":"SP-TAX","status":"waiting","pct":0},{"id":"SP-FX","status":"not_started","pct":0},{"id":"SP-PROV","status":"waiting","pct":0},{"id":"SP-REVIEW","status":"waiting","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}],"blocker":{"task":"DMS Sync Verification","desc":"DMS sync failed. API timeout on Jeddah batch (34 transactions). Data validation failure on Riyadh batch (13 service ROs created without cost center assignment).","resolution":"IT to restart Jeddah sync (manual trigger). Finance to bulk-assign cost center to 13 Riyadh ROs.","resolutionAssignee":"IT Operations + Riyadh Finance","estEffort":"2 hours","taskId":"T-DMS-VERIFY","subProcess":"SP-DMS","blocks":["AR Close","Inventory Recon","Tax Calculation","Entity Review","Consolidation"]}},
  {"id":"LEX-KSA","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"HON-KSA","pct":56,"status":"on_track","tasksDone":14,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"in_progress","T-IC-RESOLVE":"in_progress","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"in_progress","T-PROV-UPD":"in_progress","T-TB-REVIEW":"not_started","T-MGMT-ADJ":"not_started","T-VARIANCE":"not_started","T-SIGNOFF":"not_started"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"in_progress","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"in_progress","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"not_started","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"TOY-KWT","pct":56,"status":"on_track","tasksDone":14,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"in_progress","T-IC-RESOLVE":"in_progress","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"in_progress","T-PROV-UPD":"in_progress","T-TB-REVIEW":"not_started","T-MGMT-ADJ":"not_started","T-VARIANCE":"not_started","T-SIGNOFF":"not_started"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"in_progress","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"in_progress","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"not_started","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"LEX-KWT","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"HON-KWT","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"TOY-QAT","pct":100,"status":"closed","tasksDone":25,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"completed","T-MGMT-ADJ":"completed","T-VARIANCE":"completed","T-SIGNOFF":"completed"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"completed","pct":100},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"LEX-QAT","pct":84,"status":"on_track","tasksDone":21,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"in_progress","T-MGMT-ADJ":"in_progress","T-VARIANCE":"in_progress","T-SIGNOFF":"in_progress"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"in_progress","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"TOY-BHR","pct":56,"status":"on_track","tasksDone":14,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"in_progress","T-IC-RESOLVE":"in_progress","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"in_progress","T-PROV-UPD":"in_progress","T-TB-REVIEW":"not_started","T-MGMT-ADJ":"not_started","T-VARIANCE":"not_started","T-SIGNOFF":"not_started"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"in_progress","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"in_progress","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"not_started","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"TOY-OMN","pct":84,"status":"on_track","tasksDone":21,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"completed","T-IC-MATCH":"completed","T-IC-RESOLVE":"completed","T-TAX-CALC":"completed","T-TAX-POST":"completed","T-FX-REVAL":"completed","T-PROV-UPD":"completed","T-TB-REVIEW":"in_progress","T-MGMT-ADJ":"in_progress","T-VARIANCE":"in_progress","T-SIGNOFF":"in_progress"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"completed","pct":100},{"id":"SP-IC","status":"completed","pct":100},{"id":"SP-TAX","status":"completed","pct":100},{"id":"SP-FX","status":"completed","pct":100},{"id":"SP-PROV","status":"completed","pct":100},{"id":"SP-REVIEW","status":"in_progress","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"STE-KSA","pct":16,"status":"on_track","tasksDone":4,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"in_progress","T-AP-GRNI":"in_progress","T-AR-BILL":"in_progress","T-AR-BAD":"in_progress","T-PAY-CALC":"completed","T-PAY-POST":"in_progress","T-ASSET-DEPR":"completed","T-ASSET-RECON":"in_progress","T-INV-RECON":"in_progress","T-INV-WD":"in_progress","T-EXP-PROC":"completed","T-EXP-ACC":"in_progress","T-BANK-IMP":"in_progress","T-BANK-REC":"not_started","T-IC-MATCH":"not_started","T-IC-RESOLVE":"not_started","T-TAX-CALC":"not_started","T-TAX-POST":"not_started","T-FX-REVAL":"not_started","T-PROV-UPD":"not_started","T-TB-REVIEW":"not_started","T-MGMT-ADJ":"not_started","T-VARIANCE":"not_started","T-SIGNOFF":"not_started"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"in_progress","pct":0},{"id":"SP-AR","status":"in_progress","pct":0},{"id":"SP-PAY","status":"in_progress","pct":50},{"id":"SP-ASSET","status":"in_progress","pct":50},{"id":"SP-INV","status":"in_progress","pct":0},{"id":"SP-EXP","status":"in_progress","pct":50},{"id":"SP-BANK","status":"in_progress","pct":0},{"id":"SP-IC","status":"not_started","pct":0},{"id":"SP-TAX","status":"not_started","pct":0},{"id":"SP-FX","status":"not_started","pct":0},{"id":"SP-PROV","status":"not_started","pct":0},{"id":"SP-REVIEW","status":"not_started","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"VOL-KSA","pct":56,"status":"on_track","tasksDone":14,"tasksTotal":25,"blocked":0,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"in_progress","T-IC-RESOLVE":"in_progress","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"in_progress","T-PROV-UPD":"in_progress","T-TB-REVIEW":"not_started","T-MGMT-ADJ":"not_started","T-VARIANCE":"not_started","T-SIGNOFF":"not_started"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"in_progress","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"in_progress","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"not_started","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}]},
  {"id":"TOY-EGY","pct":56,"status":"at_risk","tasksDone":14,"tasksTotal":25,"blocked":1,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"completed","T-AP-GRNI":"completed","T-AR-BILL":"completed","T-AR-BAD":"completed","T-PAY-CALC":"completed","T-PAY-POST":"completed","T-ASSET-DEPR":"completed","T-ASSET-RECON":"completed","T-INV-RECON":"completed","T-INV-WD":"completed","T-EXP-PROC":"completed","T-EXP-ACC":"completed","T-BANK-IMP":"completed","T-BANK-REC":"in_progress","T-IC-MATCH":"in_progress","T-IC-RESOLVE":"in_progress","T-TAX-CALC":"in_progress","T-TAX-POST":"in_progress","T-FX-REVAL":"blocked","T-PROV-UPD":"in_progress","T-TB-REVIEW":"waiting","T-MGMT-ADJ":"waiting","T-VARIANCE":"waiting","T-SIGNOFF":"waiting"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"completed","pct":100},{"id":"SP-AR","status":"completed","pct":100},{"id":"SP-PAY","status":"completed","pct":100},{"id":"SP-ASSET","status":"completed","pct":100},{"id":"SP-INV","status":"completed","pct":100},{"id":"SP-EXP","status":"completed","pct":100},{"id":"SP-BANK","status":"in_progress","pct":50},{"id":"SP-IC","status":"in_progress","pct":0},{"id":"SP-TAX","status":"in_progress","pct":0},{"id":"SP-FX","status":"blocked","pct":0},{"id":"SP-PROV","status":"in_progress","pct":0},{"id":"SP-REVIEW","status":"waiting","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}],"blocker":{"task":"Currency Revaluation","desc":"EGP depreciated 6.8% in June (0.073 to 0.068 AED). Toyota Egypt has AED 20.6M in EGP-denominated receivables. Unrealized FX loss: AED 1.4M. Approaching treasury FX risk policy threshold.","resolution":"Treasury to evaluate hedging position on EGP exposure. Flag for CFO monthly risk report.","resolutionAssignee":"Treasury Manager","estEffort":"4 hours","taskId":"T-FX-REVAL","subProcess":"SP-FX","blocks":["Entity Review","Consolidation"]}},
  {"id":"TOY-PAK","pct":16,"status":"at_risk","tasksDone":4,"tasksTotal":25,"blocked":1,"taskStates":{"T-DMS-VERIFY":"completed","T-AP-CUTOFF":"in_progress","T-AP-GRNI":"in_progress","T-AR-BILL":"in_progress","T-AR-BAD":"in_progress","T-PAY-CALC":"completed","T-PAY-POST":"blocked","T-ASSET-DEPR":"completed","T-ASSET-RECON":"in_progress","T-INV-RECON":"in_progress","T-INV-WD":"in_progress","T-EXP-PROC":"completed","T-EXP-ACC":"in_progress","T-BANK-IMP":"in_progress","T-BANK-REC":"not_started","T-IC-MATCH":"not_started","T-IC-RESOLVE":"not_started","T-TAX-CALC":"not_started","T-TAX-POST":"not_started","T-FX-REVAL":"not_started","T-PROV-UPD":"not_started","T-TB-REVIEW":"waiting","T-MGMT-ADJ":"waiting","T-VARIANCE":"waiting","T-SIGNOFF":"waiting"},"subProcessStatuses":[{"id":"SP-DMS","status":"completed","pct":100},{"id":"SP-AP","status":"in_progress","pct":0},{"id":"SP-AR","status":"in_progress","pct":0},{"id":"SP-PAY","status":"blocked","pct":50},{"id":"SP-ASSET","status":"in_progress","pct":50},{"id":"SP-INV","status":"in_progress","pct":0},{"id":"SP-EXP","status":"in_progress","pct":50},{"id":"SP-BANK","status":"in_progress","pct":0},{"id":"SP-IC","status":"not_started","pct":0},{"id":"SP-TAX","status":"not_started","pct":0},{"id":"SP-FX","status":"not_started","pct":0},{"id":"SP-PROV","status":"not_started","pct":0},{"id":"SP-REVIEW","status":"waiting","pct":0},{"id":"SP-CONSOL","status":"waiting","pct":0},{"id":"SP-REPORT","status":"waiting","pct":0}],"blocker":{"task":"Payroll Posting","desc":"Pakistan payroll posting delayed. HR has not approved the overtime calculation for June. 142 employees affected. Payroll journal cannot be posted to S/4HANA until HR sign-off.","resolution":"Escalate to HR Director Pakistan. If not resolved by Day 4, post estimated accrual and adjust in July.","resolutionAssignee":"HR Finance Manager + HR Director Pakistan","estEffort":"1 hour (escalation) or 30 min (accrual)","taskId":"T-PAY-POST","subProcess":"SP-PAY","blocks":["Trial Balance Review","Entity Review","Consolidation"]}}
],

// ============ PEOPLE ============
people: [
  { id:"P-AHMAD", name:"Ahmad Al-Rashid", role:"Service Advisor", entity:"TOY-UAE", location:"DXB-QUOZ", email:"ahmad.r@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-SARA", name:"Sara Al-Mansoori", role:"IC Accountant", entity:"TOY-UAE", email:"sara.m@alfuttaim.com", systemAccess:["S4","TREASURY"] },
  { id:"P-FATIMA", name:"Fatima Al-Hashemi", role:"Inventory Controller", entity:"TOY-UAE", email:"fatima.h@alfuttaim.com", systemAccess:["S4","DMS"] },
  { id:"P-KHALID", name:"Khalid Mohammed", role:"Service Advisor", entity:"TOY-UAE", location:"DXB-QUOZ", email:"khalid.m@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-OMAR", name:"Omar Hassan", role:"AP Manager", entity:"TOY-UAE", email:"omar.h@alfuttaim.com", systemAccess:["AP","S4"] },
  { id:"P-RAVI", name:"Ravi Patel", role:"Service Advisor", entity:"TOY-UAE", location:"DXB-QUOZ", email:"ravi.p@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-MOHAMMED", name:"Mohammed Saeed", role:"Senior Technician", entity:"TOY-UAE", location:"DXB-QUOZ", email:"mohammed.s@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-DEEPAK", name:"Deepak Kumar", role:"Technician", entity:"TOY-UAE", location:"DXB-QUOZ", email:"deepak.k@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-ALI", name:"Ali Al-Balushi", role:"Technician", entity:"TOY-UAE", location:"DXB-QUOZ", email:"ali.b@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-FARHAN", name:"Farhan Iqbal", role:"Technician", entity:"TOY-UAE", location:"DXB-QUOZ", email:"farhan.i@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-RAJESH", name:"Rajesh Nair", role:"Technician", entity:"TOY-UAE", location:"DXB-QUOZ", email:"rajesh.n@alfuttaim.com", systemAccess:["DMS"] },
  { id:"P-NADIA", name:"Nadia Al-Suwaidi", role:"Financial Controller", entity:"TOY-UAE", email:"nadia.s@alfuttaim.com", systemAccess:["S4","SAC"] },
  { id:"P-JAMES", name:"James Wilson", role:"Group Controller", entity:"AF-AUTO", email:"james.w@alfuttaim.com", systemAccess:["S4","GRP","SAC"] },
  { id:"P-AISHA", name:"Aisha Al-Ketbi", role:"Treasury Manager", entity:"AF-AUTO", email:"aisha.k@alfuttaim.com", systemAccess:["TREASURY","S4","BANK"] },
  { id:"P-YUSUF", name:"Yusuf Ibrahim", role:"Tax Manager", entity:"AF-AUTO", email:"yusuf.i@alfuttaim.com", systemAccess:["TAX","S4"] },
  { id:"P-PRIYA", name:"Priya Sharma", role:"FP&A Manager", entity:"AF-AUTO", email:"priya.s@alfuttaim.com", systemAccess:["SAC","S4"] },
],

// ============ LOCATION METRICS ============
locationMetrics: {
  "DXB-MALL": { units:42, usedUnits:12, revenue:5250, serviceRevenue:0, partsRevenue:0, fniRevenue:134, testDrives:86, walkIns:340, conversion:12.4, asp:125000, gpu:8200 },
  "DXB-DEIRA": { units:38, usedUnits:8, revenue:4750, serviceRevenue:0, partsRevenue:0, fniRevenue:118, testDrives:72, walkIns:295, conversion:12.9, asp:122000, gpu:7800 },
  "DXB-FC": { units:35, usedUnits:10, revenue:4375, serviceRevenue:0, partsRevenue:0, fniRevenue:112, testDrives:65, walkIns:270, conversion:13.0, asp:118000, gpu:7500 },
  "DXB-QUOZ": { units:0, usedUnits:0, revenue:0, serviceRevenue:1190, partsRevenue:420, fniRevenue:0, ros:820, avgRO:1450, bayUtil:87, techUtil:91, advisorUpsell:30, partsRate:94, waitTime:22 },
  "DXB-DIP": { units:0, usedUnits:0, revenue:0, serviceRevenue:0, partsRevenue:890, fniRevenue:0, wholesaleOrders:340, retailWalkIns:120, fillRate:96 },
  "AUH-MUS": { units:48, usedUnits:15, revenue:6000, serviceRevenue:960, partsRevenue:280, fniRevenue:156, testDrives:92, walkIns:380, conversion:12.6, asp:128000, gpu:8500, ros:620, avgRO:1548 },
  "AUH-KHL": { units:28, usedUnits:5, revenue:3500, serviceRevenue:0, partsRevenue:0, fniRevenue:84, testDrives:48, walkIns:210, conversion:13.3, asp:130000, gpu:8800 },
  "ALN": { units:32, usedUnits:8, revenue:4000, serviceRevenue:640, partsRevenue:180, fniRevenue:102, testDrives:58, walkIns:250, conversion:12.8, asp:126000, gpu:8100, ros:480, avgRO:1333 },
  "SHJ-SH": { units:22, usedUnits:6, revenue:2750, serviceRevenue:0, partsRevenue:0, fniRevenue:68, testDrives:42, walkIns:185, conversion:11.9, asp:118000, gpu:7200 },
  "SHJ-SVC": { units:0, usedUnits:0, revenue:0, serviceRevenue:680, partsRevenue:210, fniRevenue:0, ros:440, avgRO:1545, bayUtil:82, techUtil:88 },
  "RAK": { units:18, usedUnits:4, revenue:2250, serviceRevenue:330, partsRevenue:90, fniRevenue:54, testDrives:32, walkIns:145, conversion:12.4, asp:115000, gpu:6900, ros:280, avgRO:1179 },
  "AUTO-QUS": { units:0, usedUnits:0, revenue:0, serviceRevenue:520, partsRevenue:180, fniRevenue:0, ros:380, avgRO:1368, bayUtil:78, techUtil:85 },
},

// Staff performance for Al Quoz
staffPerformance: {
  advisors: [
    { name:"Ahmad Al-Rashid", ros:142, revenue:218, upsell:34, csi:4.6, avgRO:1535 },
    { name:"Khalid Mohammed", ros:128, revenue:195, upsell:28, csi:4.4, avgRO:1523 },
    { name:"Ravi Patel", ros:134, revenue:201, upsell:31, csi:4.5, avgRO:1500 },
    { name:"Omar Hassan", ros:118, revenue:176, upsell:26, csi:4.3, avgRO:1492 },
  ],
  technicians: [
    { name:"Mohammed Saeed", jobs:86, efficiency:94, comeback:1.2, specialty:"Engine & Transmission" },
    { name:"Deepak Kumar", jobs:78, efficiency:89, comeback:2.1, specialty:"Electrical & Diagnostics" },
    { name:"Ali Al-Balushi", jobs:82, efficiency:91, comeback:1.5, specialty:"Brakes & Suspension" },
    { name:"Farhan Iqbal", jobs:74, efficiency:87, comeback:1.8, specialty:"Body & Paint" },
    { name:"Rajesh Nair", jobs:80, efficiency:92, comeback:1.1, specialty:"AC & Cooling" },
  ],
},

// ============ PACE DATA ============
// Planned task distribution comes from the process template (target_day per task).
// Actual = tasks completed in each time bucket for that specific period instance.
// The pace chart computes cumulative planned vs actual % from these counts.
pace: {
  // MONTHLY: x-axis = Day 1..5. planByDay derived from template target_day distribution.
  monthly: {
    planByDay: [5, 9, 6, 4, 2],          // 26 tasks/entity planned to finish on each day
    xLabels: ["Day 1","Day 2","Day 3","Day 4","Day 5"],
  },
  // QUARTERLY: x-axis = 3 month-windows + add-on window. Each month contributes its task block.
  quarterly: {
    planByWindow: [26, 26, 26, 8],        // April, May, June, Q-add-ons = 86 tasks
    xLabels: ["April","May","June","Q2 Add-ons"],
  },
  // ANNUAL: x-axis = 4 quarter-windows + annual add-on window.
  annual: {
    planByWindow: [86, 86, 86, 86, 20],   // Q1..Q4 + annual add-ons = 364 tasks
    xLabels: ["Q1","Q2","Q3","Q4","Annual Add-ons"],
  },
  // Actual completion per period instance (task counts per bucket).
  // closeIndex = bucket where it finished (completed periods). currentIndex = last bucket with data (live periods).
  actuals: {
    // Monthly
    "PI-JAN": { type:"monthly", arr:[6,10,6,4],     closeIndex:3 },  // closed Day 4
    "PI-FEB": { type:"monthly", arr:[5,9,6,4,2],    closeIndex:4 },  // closed Day 5
    "PI-MAR": { type:"monthly", arr:[6,9,7,4],      closeIndex:3 },  // closed Day 4
    "PI-APR": { type:"monthly", arr:[5,9,5,4,3],    closeIndex:4 },  // closed Day 5 (on target)
    "PI-MAY": { type:"monthly", arr:[5,10,7,4],     closeIndex:3 },  // closed Day 4 (1 day early)
    "PI-JUN": { type:"monthly", arr:[5,7,3],        currentIndex:2 },// LIVE: Day 3, behind plan (IC blocker)
    // Quarterly
    "PI-Q1":  { type:"quarterly", arr:[26,26,26,8], closeIndex:3 },  // all months + add-ons done
    "PI-Q2":  { type:"quarterly", arr:[26,26,15,0], currentIndex:2 },// April+May done, June in progress, add-ons waiting
    "PI-Q3":  { type:"quarterly", arr:[],           currentIndex:-1 },
    "PI-Q4":  { type:"quarterly", arr:[],           currentIndex:-1 },
    // Annual
    "PI-FY2026": { type:"annual", arr:[86,67,0,0,0], currentIndex:1 },// Q1 done, Q2 in progress
  },
},

// ============ TASK OWNER VIEW (June 2026, Toyota UAE, Omar = AP Manager) ============
// Personal task list for the Task Owner persona.
myTasks: {
  person:"Omar Hassan", role:"AP Manager", entity:"TOY-UAE", entityName:"Toyota UAE",
  ready: [
    { id:"T-AP-GRNI", name:"GRNI Accruals", subProcess:"Accounts Payable Close", dueDay:2, effortHrs:2, deliverable:"Received-not-invoiced accruals posted", dependsMet:"Invoice Cutoff completed" },
  ],
  inProgress: [
    { id:"T-AP-CUTOFF", name:"Invoice Processing Cutoff", subProcess:"Accounts Payable Close", dueDay:2, effortHrs:2, startedAt:"Today 09:15", progress:70, deliverable:"All invoices received, matched, posted" },
  ],
  waiting: [
    { id:"T-AP-REVIEW", name:"AP Aging Review", subProcess:"Accounts Payable Close", dueDay:3, effortHrs:1, waitingOn:"GRNI Accruals", deliverable:"AP aging reconciled and reviewed" },
  ],
  completed: [
    { id:"T-AP-VENDOR", name:"Vendor Statement Reconciliation", subProcess:"Accounts Payable Close", completedDay:1 },
  ],
  blocking: [
    { task:"Bank Reconciliation", owner:"Aisha Al-Ketbi (Treasury)", waitingFor:"GRNI Accruals" },
  ],
},

// ============ ENTITY SIGN-OFF TRACKER (Group Controller view, June 2026) ============
signOffTracker: [
  { id:"LEX-UAE", signedOff:true, signedBy:"L. Haddad", at:"Day 2 14:20" },
  { id:"HON-UAE", signedOff:true, signedBy:"M. Cherian", at:"Day 2 16:05" },
  { id:"VOL-UAE", signedOff:true, signedBy:"S. Pillai", at:"Day 2 11:30" },
  { id:"BYD-UAE", signedOff:true, signedBy:"R. Khan", at:"Day 2 15:45" },
  { id:"LEX-KSA", signedOff:true, signedBy:"A. Otaibi", at:"Day 2 17:10" },
  { id:"LEX-KWT", signedOff:true, signedBy:"K. Sabah", at:"Day 3 09:00" },
  { id:"HON-KWT", signedOff:true, signedBy:"N. Ali", at:"Day 3 09:30" },
  { id:"TOY-QAT", signedOff:true, signedBy:"F. Thani", at:"Day 3 10:15" },
  { id:"TOY-UAE", signedOff:false, blocker:"IC recon AED 340K mismatch" },
  { id:"STE-UAE", signedOff:false, status:"in_progress" },
  { id:"TOY-KSA", signedOff:false, blocker:"DMS sync failed" },
  { id:"HON-KSA", signedOff:false, status:"in_progress" },
  { id:"TOY-KWT", signedOff:false, status:"in_progress" },
  { id:"LEX-QAT", signedOff:false, status:"in_progress" },
  { id:"TOY-BHR", signedOff:false, status:"in_progress" },
  { id:"TOY-OMN", signedOff:false, status:"in_progress" },
  { id:"STE-KSA", signedOff:false, status:"in_progress" },
  { id:"VOL-KSA", signedOff:false, status:"in_progress" },
  { id:"TOY-EGY", signedOff:false, blocker:"FX revaluation EGP -6.8%" },
  { id:"TOY-PAK", signedOff:false, blocker:"Payroll posting delayed" },
],

// ============ TASK ENRICHMENT ============
// Maps task template IDs to assignee (person) + data contract (reads_from/transformation/writes_to).
// Kept separate from the template tree so the contract is easy to read and edit.
// In Phase 2 this lives in the DB on the task row; the lookup logic is identical.
taskEnrichment: {
  "T-DMS-VERIFY": { assignee:"P-FATIMA",
    reads:[{sys:"DMS",obj:"Daily sales, service ROs, parts movements"}],
    transform:"Verify all DMS transactions synced; reconcile counts vs S/4HANA",
    writes:[{sys:"S4",obj:"Confirmed transaction postings"}] },
  "T-AP-CUTOFF": { assignee:"P-OMAR",
    reads:[{sys:"AP",obj:"Captured & matched vendor invoices"}],
    transform:"Apply period cutoff; post matched invoices to FI",
    writes:[{sys:"S4",obj:"AP journal entries"}] },
  "T-AP-GRNI": { assignee:"P-OMAR",
    reads:[{sys:"S4",obj:"Open purchase orders"},{sys:"AP",obj:"Received-not-invoiced items"}],
    transform:"Compute goods-received-not-invoiced accrual",
    writes:[{sys:"S4",obj:"GRNI accrual journal"}] },
  "T-AR-BILL": { assignee:"P-SARA",
    reads:[{sys:"DMS",obj:"Vehicle/service/parts sales"},{sys:"S4",obj:"Customer master"}],
    transform:"Generate all customer invoices for the period",
    writes:[{sys:"S4",obj:"AR invoices & revenue postings"}] },
  "T-AR-BAD": { assignee:"P-SARA",
    reads:[{sys:"S4",obj:"AR aging"}],
    transform:"Assess doubtful debts, compute provision",
    writes:[{sys:"S4",obj:"Bad debt provision journal"}] },
  "T-PAY-CALC": { assignee:"P-PRIYA",
    reads:[{sys:"SF",obj:"HR master, time & attendance, OT approvals"}],
    transform:"Calculate salary, overtime, commission, EOS benefits",
    writes:[{sys:"SF",obj:"Payroll run results"}] },
  "T-PAY-POST": { assignee:"P-PRIYA",
    reads:[{sys:"SF",obj:"Payroll run results"}],
    transform:"Map payroll to GL accounts, post journal",
    writes:[{sys:"S4",obj:"Payroll journal entry"}] },
  "T-BANK-IMP": { assignee:"P-AISHA",
    reads:[{sys:"BANK",obj:"Bank statement files (MT940)"}],
    transform:"Load and parse bank statements",
    writes:[{sys:"TREASURY",obj:"Imported statement lines"}] },
  "T-BANK-REC": { assignee:"P-AISHA",
    reads:[{sys:"TREASURY",obj:"Statement lines"},{sys:"S4",obj:"GL cash & AP entries"}],
    transform:"Match statement lines to GL; resolve unmatched items",
    writes:[{sys:"S4",obj:"Reconciliation adjustments"}] },
  "T-IC-MATCH": { assignee:"P-SARA",
    reads:[{sys:"S4",obj:"Intercompany AR/AP balances (all entities)"}],
    transform:"Match IC balances across entity pairs; flag mismatches",
    writes:[{sys:"TREASURY",obj:"IC matching results"}] },
  "T-IC-RESOLVE": { assignee:"P-SARA",
    reads:[{sys:"TREASURY",obj:"IC mismatch list"}],
    transform:"Investigate and post correcting entries for IC differences",
    writes:[{sys:"S4",obj:"IC correction journals"}] },
  "T-TAX-CALC": { assignee:"P-YUSUF",
    reads:[{sys:"S4",obj:"Period transactions (ACDOCA)"},{sys:"DMS",obj:"Sales detail"}],
    transform:"Apply per-country VAT/GST rates; compute period tax liability",
    writes:[{sys:"TAX",obj:"VAT/GST calculation"}] },
  "T-TAX-POST": { assignee:"P-YUSUF",
    reads:[{sys:"TAX",obj:"Computed tax liability"}],
    transform:"Post tax accruals to GL",
    writes:[{sys:"S4",obj:"Tax accrual journal"}] },
  "T-FX-REVAL": { assignee:"P-AISHA",
    reads:[{sys:"S4",obj:"Open FX-denominated items"},{sys:"TREASURY",obj:"Closing FX rates"}],
    transform:"Revalue open foreign-currency items at closing rate",
    writes:[{sys:"S4",obj:"FX revaluation journal"}] },
  "T-PROV-UPD": { assignee:"P-NADIA",
    reads:[{sys:"S4",obj:"Warranty, legal, bonus base data"}],
    transform:"Review and update provisions",
    writes:[{sys:"S4",obj:"Provision journals"}] },
  "T-TB-REVIEW": { assignee:"P-NADIA",
    reads:[{sys:"S4",obj:"Full trial balance"}],
    transform:"Review TB, investigate anomalies",
    writes:[{sys:"S4",obj:"Review notes"}] },
  "T-SIGNOFF": { assignee:"P-NADIA",
    reads:[{sys:"S4",obj:"Reviewed trial balance"}],
    transform:"Controller certifies entity close",
    writes:[{sys:"S4",obj:"Entity close certification"}] },
  "T-CON-COLLECT": { assignee:"P-JAMES",
    reads:[{sys:"S4",obj:"All entity financial data packages"}],
    transform:"Pull all signed-off entity data",
    writes:[{sys:"GRP",obj:"Consolidation staging"}] },
  "T-CON-ELIM": { assignee:"P-JAMES",
    reads:[{sys:"GRP",obj:"Staged entity data"}],
    transform:"Eliminate intercompany revenue, cost, balances",
    writes:[{sys:"GRP",obj:"Eliminated consolidation"}] },
  "T-CON-STMTS": { assignee:"P-JAMES",
    reads:[{sys:"GRP",obj:"Adjusted consolidation"}],
    transform:"Produce group P&L, balance sheet, cash flow",
    writes:[{sys:"GRP",obj:"Consolidated statements"},{sys:"SAC",obj:"Reporting dataset"}] },
},

};
