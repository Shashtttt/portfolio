/**
 * DATA ANALYST PORTFOLIO - SHASHVAT RAI
 * Projects repository updated with exact analytical audit specifications.
 */

const portfolioProfile = {
  name: "Shashvat Rai",
  title: "Data Analyst",
  tagline: "Translating complex datasets into interactive Power BI dashboards, predictive analytics models, and validated business insights.",
  status: "Open to Full-Time Roles & Data Analytics Projects",
  location: "India / Remote Available",
  email: "shashvat.analytics@gmail.com",
  linkedin: "https://linkedin.com/in/shashvat-rai",
  github: "https://github.com/Shashtttt/Data-Analysis-projects",
  tableauPublic: "https://public.tableau.com",
  resumeUrl: "#contact",

  stats: [
    { label: "Production BI Dashboards", value: "4+", icon: "chart" },
    { label: "Completed Projects", value: "8", icon: "tools" },
    { label: "Portfolio Value Tracked", value: "₹171B+", icon: "currency" },
    { label: "Core Analytics Tools", value: "6+", icon: "database" }
  ],

  skills: {
    biAndViz: ["Microsoft Power BI", "DAX Formulas", "Power Query & ETL", "Tableau", "Interactive KPI Scorecards", "Data Storytelling"],
    databases: ["SQL (PostgreSQL, MySQL)", "Data Modeling (Star Schema)", "CTEs & Window Functions", "Aggregation & Grouping", "Database Hygiene"],
    programming: ["Python (Flask, Pandas, NumPy)", "Scikit-learn & XGBoost", "SHAP (Explainable AI)", "Chart.js & Matplotlib", "Exploratory Data Analysis (EDA)", "Jupyter Notebooks"],
    spreadsheets: ["Advanced Excel", "Pivot Tables & Slicers", "XLOOKUP & INDEX/MATCH", "Statistical Distributions", "Business Modeling"],
    methodologies: ["Interactive What-If Simulation", "Automated PDF Reporting", "Customer Churn Prediction", "Sales Funnel & Volume Flow", "Market Price Valuation", "Cohort Retention"]
  }
};

const projectsData = [
  {
    id: "goods-consumption",
    title: "Goods Consumption Analysis",
    category: "powerbi",
    categoryLabel: "Power BI & Macro Consumption",
    badge: "Longitudinal BI Study",
    headline: "Five-year longitudinal Power BI study (2019–2023) tracking consumption and sales trends, metro demand velocity, and demographic consumption percentages.",
    
    image: "assets/images/goods-consumption-dashboard.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Timeframe", val: "2019–2023" },
      { label: "Growth 2020", val: "3.38%" },
      { label: "Adult Category", val: "23.51%" },
      { label: "Older-Consumer", val: "29.32%" }
    ],

    tools: ["Microsoft Power BI", "DAX Formulas", "Time-Series Analytics", "Demographic Segmentation", "Power Query"],

    problem: `
      <p><strong>Source file:</strong> <code>goods consumption.pbix</code></p>
      <p><strong>Dataset size:</strong> Not established from the uploaded PBIX. Exact record and column counts are unavailable.</p>
      <p style="margin-top: 8px;"><strong>Dashboard scope:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Consumption and sales trends across 2019–2023.</li>
        <li>City-wise and category-wise consumption patterns.</li>
        <li>Annual growth and demographic consumption percentages.</li>
      </ul>
    `,

    approach: `
      <p>Constructed an analytical Power BI model evaluating consumption trends across multi-year intervals and generational demographics. Includes stacked volume trends, category distributions, and growth index scorecards.</p>
      <div class="cs-table-wrapper">
        <table class="cs-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Previously Reported Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Growth in 2020</td><td><strong>2.99% / 3.38%</strong></td></tr>
            <tr><td>Growth in 2021</td><td><strong>3.38% / 2.99%</strong></td></tr>
            <tr><td>Growth in 2022</td><td><strong>2.67%</strong></td></tr>
            <tr><td>Growth in 2023</td><td><strong>2.40%</strong></td></tr>
            <tr><td>Adult FMCG/Chemicals consumption</td><td><strong>23.51%</strong></td></tr>
            <tr><td>Older-consumer Chemicals/FMCG consumption</td><td><strong>29.32%</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Data-Model Note:</div>
        Previously discussed observations included Mumbai and Delhi leading consumption, notable growth in Bangalore, and declining Electronics and Automotive categories. These statements should be checked against the underlying dataset before being presented as independently verified findings.
      </div>
    `,

    insights: [
      "Provides a multi-dimensional view of consumption trends by city, product category, year, and demographic segment.",
      "Identified longitudinal growth shifts across 2019–2023 with peak growth recorded in 2020 (3.38%) normalizing across subsequent fiscal cycles.",
      "Demographic consumption analysis indicates distinct category splits between working Adults and Older consumers."
    ],

    recommendations: `
      <p><strong>Outcome and potential business value:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Provides a consolidated view of consumption trends by city, category, year, and demographic segment.</li>
        <li>Can support regional demand planning, category prioritization, and marketing allocation.</li>
      </ul>
      <div class="cs-checklist-box" style="margin-top: 14px;">
        <div class="cs-checklist-title">📋 What remains to verify:</div>
        <ul style="margin-left: 20px; margin-top: 4px;">
          <li>Original row count, column count, date coverage, nulls, and duplicates.</li>
          <li>Whether growth percentages use revenue, volume, or another measure.</li>
          <li>Exact city and category rankings and the denominator behind demographic percentages.</li>
        </ul>
      </div>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pbixDownload: "projeccts/goods consumption.pbix"
    }
  },

  {
    id: "property-real-estate",
    title: "Property & Real Estate Market Analysis",
    category: "powerbi",
    categoryLabel: "Power BI & Real Estate BI",
    badge: "Real Estate Portfolio",
    headline: "Interactive Power BI real estate dashboard evaluating property pricing, net price, application velocity over time, saleable area, unit rate, and collections.",
    
    image: "assets/images/property-sales-dashboard.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Received Amount", val: "₹172B" },
      { label: "Total Net Price", val: "₹171B" },
      { label: "Balance KPI", val: "13.811K" },
      { label: "M3M 65th Ave", val: "9.41%" }
    ],

    tools: ["Microsoft Power BI", "DAX Formulas", "Real Estate Valuation", "Portfolio Analytics", "Power Query"],

    problem: `
      <p><strong>Source file:</strong> <code>Property.pbix</code></p>
      <p><strong>Dataset size:</strong> Not established from the uploaded PBIX.</p>
      <p style="margin-top: 8px;"><strong>Dashboard scope:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Property pricing and net price.</li>
        <li>Applications over time and property-wise distribution.</li>
        <li>Saleable area and unit rate.</li>
        <li>Amount received, balance, possession status, and related KPI cards.</li>
      </ul>
    `,

    approach: `
      <p>Engineered an executive real estate portfolio dashboard connecting unit inventories, booking date velocity curves, unit rate rankings vs. saleable area, and possession status (Possession Given Y/N) slicers with live balance tracking.</p>
      <div class="cs-table-wrapper">
        <table class="cs-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Previously Reported Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Received amount</td><td><strong>₹172 billion</strong></td></tr>
            <tr><td>Total net price</td><td><strong>₹171 billion</strong></td></tr>
            <tr><td>Unit/balance-related KPI</td><td><strong>13.811K</strong> <em>(exact label/meaning needs confirmation)</em></td></tr>
            <tr><td>M3M 65th Avenue</td><td><strong>9.41%</strong></td></tr>
            <tr><td>M3M Golf Estate</td><td><strong>8.95%</strong></td></tr>
            <tr><td>Peak application period</td><td><strong>April 2020</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Reconciliation &amp; Aggregation Check:</div>
        The received amount being greater than the total net price requires reconciliation. The 13.811K KPI must not be described as total units or balance units until its exact field and aggregation are confirmed.
      </div>
    `,

    insights: [
      "Brings pricing, application velocity, collection realization, balance status, and possession distribution into a unified executive view.",
      "M3M 65th Avenue (9.41%) and M3M Golf Estate (8.95%) lead property-level net price share.",
      "Historical booking applications peaked around April 2020 seasonal cycles."
    ],

    recommendations: `
      <p><strong>Outcome and potential business value:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Brings pricing, application, collection, balance, and possession information into one dashboard.</li>
        <li>Can support property-level performance comparisons and follow-up on collections or unsold inventory.</li>
      </ul>
      <div class="cs-checklist-box" style="margin-top: 14px;">
        <div class="cs-checklist-title">📋 Data-model checks:</div>
        <ul style="margin-left: 20px; margin-top: 4px;">
          <li>Review cards that appear to use MIN aggregations for fields whose labels imply counts, including Property, Balance, and CALLED_TAX.</li>
          <li>Confirm currency units, date filters, and whether percentages are shares, growth rates, or other ratios.</li>
        </ul>
      </div>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pbixDownload: "projeccts/Property.pbix"
    }
  },

  {
    id: "tata-sales-bi",
    title: "Tata Sales Performance",
    category: "powerbi",
    categoryLabel: "Power BI & Automotive BI",
    badge: "Sales BI Dashboard",
    headline: "Sales-performance dashboard designed to compare product models, sales value, units sold, and promotional discount patterns over time.",
    
    image: "assets/images/tata-sales-dashboard.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Dashboard Scope", val: "Multi-Model" },
      { label: "Time Drilldown", val: "Yr/Qtr/Mo/Day" },
      { label: "KPIs Tracked", val: "Units & Value" },
      { label: "Discount Analysis", val: "Model-Wise" }
    ],

    tools: ["Microsoft Power BI", "DAX Formulas", "Model Pricing Analytics", "Power Query", "Excel"],

    problem: `
      <p><strong>Source file:</strong> <code>Tata Sales.pbix</code></p>
      <p><strong>Dataset size:</strong> Not established from the uploaded PBIX.</p>
      <p style="margin-top: 8px;"><strong>Fields and dashboard scope:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Company, date hierarchy (year, quarter, month, day), discount, fuel type, new price, price, model number, model name, and total units sold.</li>
        <li>Model-wise price and discount comparisons.</li>
        <li>Units sold by model, discount trends over time, and KPI cards for units, value, and discount.</li>
      </ul>
    `,

    approach: `
      <p>Constructed an executive dashboard to analyze product model pricing and discount distribution. Connects model catalog attributes with transaction dates to track volume dynamics across trims.</p>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Extraction Caveat:</div>
        No specific model ranking, revenue total, unit total, or discount total is stated here because the underlying values were not independently extracted.
      </div>
    `,

    insights: [
      "A sales-performance dashboard designed to compare product models, sales value, units sold, and discount patterns over time.",
      "Supports identifying models contributing the largest sales value or unit volume.",
      "Enables comparing discount levels across models and reviewing discount patterns over time with sales performance."
    ],

    recommendations: `
      <p><strong>Outcome:</strong> A sales-performance dashboard designed to compare product models, sales value, units sold, and discount patterns over time.</p>
      <div class="cs-checklist-box" style="margin-top: 14px;">
        <div class="cs-checklist-title">📋 What remains to verify:</div>
        <ul style="margin-left: 20px; margin-top: 4px;">
          <li>Dataset dimensions, date range, currency, unique model count, missing values, and duplicates.</li>
          <li>The exact definitions of total value, total units, and total discount.</li>
        </ul>
      </div>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pbixDownload: "projeccts/Tata Sales.pbix"
    }
  },

  {
    id: "titled-books-analytics",
    title: "Book Price, Rating & Availability Analysis",
    category: "powerbi",
    categoryLabel: "Power BI & Catalogue BI",
    badge: "Catalogue Analytics",
    headline: "Retail Power BI dashboard evaluating book catalogue pricing, rating distributions, inventory availability, and price-versus-rating scatter analysis.",
    
    image: "assets/images/titled-books-dashboard.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Catalogue Scope", val: "Price & Rating" },
      { label: "Rating Scale", val: "1 to 5 Stars" },
      { label: "Availability", val: "Stock Status" },
      { label: "Visual Count", val: "11 Visuals" }
    ],

    tools: ["Microsoft Power BI", "DAX Formulas", "Scatter Correlation", "Pricing Exploration", "Power Query"],

    problem: `
      <p><strong>Source file:</strong> <code>shashvat.pbix</code></p>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Important finding:</div>
        The internal model fields point to a book catalogue dataset, not an obvious transactional sales dataset. The project title may therefore be misleading. <strong>Recommended project title: Book Price, Rating &amp; Availability Analysis.</strong>
      </div>
      <p style="margin-top: 8px;"><strong>Fields and dashboard scope:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Title, Price (£), Rating, Rating Number, and Availability.</li>
        <li>Price-related KPI cards.</li>
        <li>Book counts by rating and average price by rating or title.</li>
        <li>Availability distribution by rating and a price-versus-rating scatter chart.</li>
      </ul>
    `,

    approach: `
      <p>Designed an analytical dashboard to explore the relationship between book prices, reviewer ratings, and catalog availability. Evaluates price dispersion across titles and rating categories.</p>
    `,

    insights: [
      "Compares catalogue prices and ratings across inventory groups.",
      "Shows how availability is distributed across rating groups.",
      "Can support catalogue comparison and pricing exploration."
    ],

    recommendations: `
      <p><strong>Outcome and potential business value:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Compares catalogue prices and ratings.</li>
        <li>Shows how availability is distributed across rating groups.</li>
        <li>Can support catalogue comparison and pricing exploration.</li>
      </ul>
      <div class="cs-checklist-box" style="margin-top: 14px;">
        <div class="cs-checklist-title">📋 Data-model checks:</div>
        <ul style="margin-left: 20px; margin-top: 4px;">
          <li>KPI labels suggest total, average, or maximum price, but the internal definitions appear to use SUM(Price (£)). Validate the measures before reporting those KPIs.</li>
          <li>Confirm whether Rating Number is a count, a score, or another field before interpreting it.</li>
        </ul>
      </div>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pbixDownload: "projeccts/shashvat.pbix"
    }
  },

  {
    id: "churn-analysis",
    title: "Customer Churn Analysis",
    category: "python",
    categoryLabel: "Python & Predictive Analytics",
    badge: "Predictive Analytics",
    headline: "Exploratory data analysis of 7,043 customer records investigating churn patterns by contract, tenure, support services, and payment methods.",
    
    image: "assets/images/churn_8.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Original Records", val: "7,043" },
      { label: "Attributes", val: "21 Columns" },
      { label: "Reported Churn", val: "26.54%" },
      { label: "Average Tenure", val: "32.37 Mos" }
    ],

    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Feature Engineering", "Exploratory Data Analysis"],

    problem: `
      <p><strong>Source file:</strong> <code>Churn.pdf</code></p>
      <div class="cs-table-wrapper">
        <table class="cs-table">
          <thead>
            <tr><th>Dataset Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Original records</td><td><strong>7,043</strong></td></tr>
            <tr><td>Columns</td><td><strong>21</strong></td></tr>
            <tr><td>Duplicate rows</td><td><strong>0</strong></td></tr>
            <tr><td>Missing values after blank replacement</td><td><strong>0 reported</strong></td></tr>
            <tr><td>Numeric fields after conversion</td><td><strong>4</strong></td></tr>
            <tr><td>Categorical/object fields after conversion</td><td><strong>17</strong></td></tr>
          </tbody>
        </table>
      </div>
    `,

    approach: `
      <p>Conducted exploratory data analysis across demographic, contract, and service subscription attributes to identify factors correlated with customer defection.</p>
      <div class="cs-table-wrapper">
        <table class="cs-table">
          <thead>
            <tr><th>Descriptive Statistics</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Average tenure</td><td><strong>32.37 months</strong></td></tr>
            <tr><td>Median tenure</td><td><strong>29 months</strong></td></tr>
            <tr><td>Average monthly charges</td><td><strong>64.76</strong></td></tr>
            <tr><td>Maximum monthly charges</td><td><strong>118.75</strong></td></tr>
            <tr><td>Average total charges</td><td><strong>2,279.73</strong></td></tr>
            <tr><td>Maximum total charges</td><td><strong>8,684.80</strong></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Data-Quality Note:</div>
        The notebook replaces blank TotalCharges values with zero before converting the column to numeric. It subsequently reports zero nulls. This means the cleaned dataset has no nulls after replacement, not that the original source necessarily had no missing values. The exact number of blank TotalCharges values before replacement is not stated in the extracted report.
      </div>
    `,

    insights: [
      "Reported churn finding: The notebook reports that 26.54% of customers churned (approx. 1,869 derived count from 7,043 records).",
      "Month-to-month customers showed more churn than customers on one-year or two-year contracts.",
      "The notebook compares churn across gender, senior-citizen status, tenure, internet service, phone services, support services, and payment methods.",
      "Electronic check is described as a prominent payment method among churned users.",
      "The report notes churn patterns among customers with online and technical support services; the exact direction and rate should be rechecked from the chart data before making a causal claim."
    ],

    recommendations: `
      <p><strong>Outcome and recommendations:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Segments customers by churn status and service/contract attributes.</li>
        <li>Investigate early-tenure churn and month-to-month contract retention.</li>
        <li>Review support-service adoption and payment-method patterns.</li>
      </ul>
      <p style="margin-top: 10px; font-size: 0.88rem; color: var(--text-dim);"><em>Suggested resume positioning: Analyzed 7,043 customer records across 21 attributes to explore churn patterns by contract, tenure, services, and payment method.</em></p>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pdfReport: "projeccts/Churn.pdf"
    }
  },

  {
    id: "netflix-data-analysis",
    title: "Netflix Data Analysis",
    category: "python",
    categoryLabel: "Python & Content Analytics",
    badge: "Catalogue Analytics",
    headline: "Exploratory data analysis of 1,000 original title records across 12 metadata fields examining genre, rating, duration, and country distributions.",
    
    image: "assets/images/netflix_3.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Original Titles", val: "1,000" },
      { label: "Attributes", val: "12 Fields" },
      { label: "USA Titles", val: "363" },
      { label: "TV-MA Rating", val: "276" }
    ],

    tools: ["Python", "Pandas", "Data Storytelling", "Seaborn", "Content Strategy"],

    problem: `
      <p><strong>Source file:</strong> <code>netflix.pdf</code></p>
      <div class="cs-table-wrapper">
        <table class="cs-table">
          <thead>
            <tr><th>Dataset Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Original records</td><td><strong>1,000</strong></td></tr>
            <tr><td>Columns</td><td><strong>12</strong></td></tr>
            <tr><td>Cleaned record count after dropna()</td><td><strong>Not shown</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top: 8px;"><strong>Fields include:</strong> <code>show_id</code>, <code>type</code>, <code>title</code>, <code>director</code>, <code>cast</code>, <code>country</code>, <code>date_added</code>, <code>release_year</code>, <code>rating</code>, <code>duration</code>, <code>listed_in</code>, and <code>description</code>.</p>
    `,

    approach: `
      <p>Cleaned and structured catalog metadata to examine title distributions across release dates, content types (Movies vs. TV Shows), maturity classifications, and international production origins.</p>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Interpretation Warning:</div>
        The uploaded dataset contains title metadata, not viewing or streaming-event records. Therefore, counts in this notebook describe <strong>catalogue entries, not actual viewership</strong> or the most-watched content. The notebook's phrase “most watched” should be replaced with “most frequent in the dataset” or “largest catalogue count.” The notebook applies dropna() but does not show the final cleaned row count.
      </div>
    `,

    insights: [
      "USA country entries: 363 titles.",
      "TV-MA rating entries: 276 total (with 263 TV-MA movie entries).",
      "Most common duration: 101 minutes (33 titles).",
      "Most frequent addition date: 1 July 2021 (48 titles added on that date).",
      "Action & Adventure entries with R rating: 38 titles."
    ],

    recommendations: `
      <p><strong>Outcome and recommendations:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Explores catalogue distribution by content type, country, genre, rating, duration, and date added.</li>
        <li>The notebook recommends examining Action &amp; Adventure and TV-MA catalogue representation, regional content strategy, and release timing.</li>
        <li>The analysis can support catalogue planning and content-library exploration.</li>
      </ul>
      <p style="margin-top: 10px; font-size: 0.88rem; color: var(--text-dim);"><em>Suggested resume positioning: Explored 1,000 original title records across 12 metadata fields to examine genre, rating, duration, and country distributions.</em></p>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pdfReport: "projeccts/netflix.pdf"
    }
  },

  {
    id: "second-hand-vehicle",
    title: "Second-Hand Vehicle Sales Analysis",
    category: "python",
    categoryLabel: "Python & Market Intelligence",
    badge: "Market Distribution",
    headline: "Market evaluation of 4,340 vehicle listings across eight original fields and derived manufacturer categories to compare year, fuel, ownership, and transmission.",
    
    image: "assets/images/vehicle_3.jpg",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "Original Records", val: "4,340" },
      { label: "Manual Share", val: "89.68%" },
      { label: "Maruti Listings", val: "852" },
      { label: "Top Year", val: "2017" }
    ],

    tools: ["Python", "Pandas", "Seaborn", "Statistical Distribution", "Market Valuation"],

    problem: `
      <p><strong>Source file:</strong> <code>Second hand Vehicle_sales.pdf</code></p>
      <div class="cs-table-wrapper">
        <table class="cs-table">
          <thead>
            <tr><th>Dataset Property</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Original records</td><td><strong>4,340</strong></td></tr>
            <tr><td>Original columns</td><td><strong>8</strong></td></tr>
            <tr><td>Columns after adding derived comp field</td><td><strong>9</strong></td></tr>
            <tr><td>Manual transmission</td><td><strong>3,892 (89.68%)</strong></td></tr>
            <tr><td>Automatic transmission</td><td><strong>448 (10.32%)</strong></td></tr>
            <tr><td>Maruti listings</td><td><strong>852</strong></td></tr>
            <tr><td>Most represented manufacturing year</td><td><strong>2017</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top: 8px;"><strong>Original fields:</strong> <code>car name</code>, <code>year</code>, <code>selling price</code>, <code>kilometres driven</code>, <code>fuel</code>, <code>seller type</code>, <code>transmission</code>, and <code>owner</code>. The notebook adds a <code>comp</code> field by extracting the first word of the car name.</p>
    `,

    approach: `
      <p>Analyzed market listing distribution across vehicle age, transmission configuration, fuel categories, and owner profiles.</p>
      <div class="cs-warning-box">
        <div class="cs-warning-title">⚠️ Data-Quality Note:</div>
        The notebook derives the manufacturer field using the first word of the car name. This can split multi-word manufacturer names into inaccurate categories. Clean and standardize manufacturer names before publishing brand-level conclusions. The report mentions a diesel count of 350, but the scope of that chart is unclear. It is not treated as the overall diesel count in this report.
      </div>
    `,

    insights: [
      "Manual cars account for 3,892 listings (89.68%), compared with 448 automatic cars (10.32%).",
      "Maruti is reported as the most represented manufacturer, with 852 listings.",
      "2017 is reported as the most represented manufacturing year.",
      "Diesel is described as the leading fuel category.",
      "First-owner cars are described as the most common ownership category."
    ],

    recommendations: `
      <p><strong>Outcome and recommendations:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Describes the used-car listing mix by manufacturer, manufacturing year, fuel, transmission, and ownership.</li>
        <li>Can support inventory segmentation and market comparison.</li>
        <li>A next analytical step would be to quantify price relationships with vehicle age, kilometres driven, fuel, transmission, and ownership.</li>
      </ul>
      <p style="margin-top: 10px; font-size: 0.88rem; color: var(--text-dim);"><em>Suggested resume positioning: Analyzed 4,340 vehicle listings across eight original fields and derived manufacturer categories to compare year, fuel, ownership, and transmission distributions.</em></p>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      pdfReport: "projeccts/Second hand Vehicle_sales.pdf"
    }
  },

    {
    id: "ai-visualizer-platform",
    title: "AI Dataset Visualizer (AetherBI)",
    category: "python",
    categoryLabel: "Python & Automated ML",
    badge: "Featured AI Platform",
    headline: "AI-powered, browser-based data analytics platform integrating automated ML, SHAP explainability, and interactive What-If simulations into a unified workflow.",
    
    image: "assets/images/ai-visualizer.png",
    video: null,
    loomUrl: null,

    metrics: [
      { label: "ML Engines", val: "XGBoost & Sklearn" },
      { label: "Explainability", val: "SHAP AI" },
      { label: "Simulation", val: "What-If Engine" },
      { label: "Report Export", val: "Analytical PDF" }
    ],

    tools: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SHAP", "Chart.js", "HTML/CSS/JS"],

    problem: `
      <p><strong>AetherBI</strong> is an AI-powered, browser-based data analytics platform that transforms raw datasets into meaningful insights. It resolves the widespread operational friction of fragmented data science pipelines by providing an end-to-end workflow for uploading, cleaning, preprocessing, analyzing, and visualizing data, along with automated machine learning capabilities.</p>
    `,

    approach: `
      <p>The platform integrates <strong>Scikit-learn</strong> and <strong>XGBoost</strong> for predictive modelling, <strong>SHAP</strong> for explainable AI, and an interactive <strong>What-If Simulator</strong> to explore how changes in input variables affect predictions. It also generates analytical PDF reports, bringing data preparation, exploratory analysis, visualization, predictive modelling, and explainability together in one unified platform.</p>
      
      <div class="cs-table-wrapper" style="margin-top: 12px;">
        <table class="cs-table">
          <thead>
            <tr>
              <th>Architecture Layer</th>
              <th>Technologies &amp; Libraries Used</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Backend API &amp; Server</td><td><strong>Python, Flask</strong></td></tr>
            <tr><td>Data Processing &amp; Math</td><td><strong>Pandas, NumPy</strong></td></tr>
            <tr><td>Machine Learning Models</td><td><strong>Scikit-learn, XGBoost</strong></td></tr>
            <tr><td>Explainable AI (XAI)</td><td><strong>SHAP (SHapley Additive exPlanations)</strong></td></tr>
            <tr><td>Frontend &amp; Charting</td><td><strong>Chart.js, HTML5, CSS3, JavaScript</strong></td></tr>
            <tr><td>Reporting Engine</td><td><strong>Automated Analytical PDF Generation</strong></td></tr>
          </tbody>
        </table>
      </div>
    `,

    insights: [
      "End-to-End Workflow: Brings data preparation, exploratory analysis, visualization, predictive modelling, and explainability together in one unified platform.",
      "Predictive Machine Learning: Integrates robust Scikit-learn and XGBoost pipelines to automate classification and regression on user-uploaded datasets.",
      "Explainable AI (SHAP): Uses SHAP value attribution so stakeholders can clearly understand why the model made a specific prediction.",
      "Interactive What-If Simulator: Allows users to dynamically tweak input parameters to observe real-time simulated impacts on predictions.",
      "Executive PDF Reporting: Automatically compiles data cleaning steps, model evaluation metrics, and visual plots into publication-ready PDF reports."
    ],

    recommendations: `
      <p><strong>Outcome &amp; Business Value:</strong></p>
      <ul style="margin-left: 20px; margin-top: 4px;">
        <li>Eliminates tool fragmentation by consolidating data cleaning, exploratory analysis, predictive modeling, and executive report generation into one seamless interface.</li>
        <li>Bridges the gap between complex ML algorithms and business decision-makers through transparent SHAP explainability and real-time What-If sensitivity testing.</li>
      </ul>
      <p style="margin-top: 10px; font-size: 0.88rem; color: var(--text-dim);"><em>Technologies: Python, Flask, Pandas, NumPy, Scikit-learn, XGBoost, SHAP, Chart.js, HTML, CSS, JavaScript.</em></p>
    `,

    links: {
      github: "https://github.com/Shashtttt/Data-Analysis-projects",
      liveDemo: null,
      pdfReport: null
    }
  }
];

const workExperience = [
  {
    role: "Python Programming Intern",
    company: "VaultofCodes",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Completed weekly practical assignments and development tasks as part of a Python programming internship.",
      "Developed a Data Analyzer project covering dataset profiling, data cleaning, visualization, and insight generation."
    ]
  },
  {
    role: "Web Development & AI Intern",
    company: "Star App Solutions",
    period: "Mar 2024 – Jul 2024",
    highlights: [
      "Developed web applications using HTML, CSS, JavaScript, and Python.",
      "Integrated AI and third-party APIs to add intelligent and interactive functionality to web applications.",
      "Worked on practical projects involving frontend development, backend logic, and API integration."
    ]
  }
];

const educationHistory = [
  {
    institution: "The NorthCap University, Gurugram",
    degree: "Master of Computer Applications (MCA), Data Analytics",
    year: "2025 – 2027",
    details: "CGPA: 8.11"
  },
  {
    institution: "Lingayas Vidyapeeth",
    degree: "Bachelor's Degree",
    year: "2022 – 2025",
    details: "Score: 85.70%"
  },
  {
    institution: "Sherwood Convent School, CBSE",
    degree: "Class XII (2021) & Class X (2019)",
    year: "2019 – 2021",
    details: "Class XII: 65.28% | Class X: 71.20%"
  }
];

const certifications = [
  {
    title: "AI Foundations Associate",
    issuer: "Oracle",
    year: "Certified",
    link: "https://github.com/Shashtttt"
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    year: "Certified",
    link: "https://github.com/Shashtttt"
  }
];
