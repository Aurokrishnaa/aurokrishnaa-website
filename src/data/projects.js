export const projectsData = [
    {
        title: "Large-Scale Swap Portfolio Modeling & Scenario Valuation",
        course: "MGF 644 – Fixed Income Securities",
        tools: ["Yield Book", "Excel", "Scenario Analysis"],
        description: "Built a swap portfolio model using Yield Book and stress-tested multi-period rate scenarios.",
        details: "Modeled a portfolio of swaps using Yield Book's Excel integration, conducting multi-period valuation as of three distinct historical dates. Performed forward rate projection, scenario stress-testing, and impact analysis of a 150bps parallel rate shift.",
        category: "Fixed Income"
    },
    {
        title: "Bond Analytics & Portfolio Optimization Using Yield Book",
        course: "Fixed Income Securities",
        tools: ["Yield Book Excel Add-In"],
        description: "Performed bond-level risk analysis and portfolio aggregation using Yield Book Excel tools.",
        details: "Performed duration, convexity, OAS, spread, and yield analytics on a multi-bond portfolio. Built custom scenarios and evaluated the impact of rate shifts on individual bond and portfolio-level performance.",
        category: "Fixed Income"
    },
    {
        title: "Beta Estimation & CAPM Pricing via Regression",
        course: "Financial Modeling",
        tools: ["Excel", "Yahoo Finance"],
        description: "Estimated stock betas and expected returns using CAPM and regression modeling in Excel.",
        details: "Estimated individual and portfolio-level Betas for stocks (e.g., AAPL, AMD, MSFT) using regression against the S&P 500, followed by expected return calculation under the Capital Asset Pricing Model (CAPM).",
        category: "Modeling"
    },
    {
        title: "Black-Scholes-Merton Pricing & Option Hedging",
        course: "MGF 635 – Financial Derivatives",
        tools: ["Excel", "Python"],
        description: "Applied BSM to price options and built a dynamic delta-hedged strategy using Greeks.",
        details: "Applied the Black-Scholes-Merton model to price European call and put options using market inputs. Computed Greeks (Delta, Gamma, Vega, Theta) and constructed a dynamic Delta-hedging strategy.",
        category: "Derivatives"
    },
    {
        title: "Algorithmic Trading Strategy Using IBridgePy & IBKR API",
        course: "FinTech Lab",
        tools: ["Python", "IBridgePy", "Interactive Brokers"],
        description: "Created and deployed a fully-automated trading strategy using IBKR API and live data.",
        details: "Developed a working automated trading algorithm using the IBridgePy library, integrating with IBKR’s live trading platform. Designed and backtested logic based on technical signals.",
        category: "FinTech"
    },
    {
        title: "VIX Index Replication via Implied Volatility in R",
        course: "Complex Financial Instruments",
        tools: ["R", "Yahoo Finance", "SPX Options"],
        description: "Replicated the CBOE VIX index using SPX option data and weighted variance modeling.",
        details: "Engineered a quantitative model in R to replicate the CBOE VIX by extracting SPX option data, filtering for OTM puts and calls, and applying the official variance swap formula.",
        category: "Derivatives"
    },
    {
        title: "NLP-Driven Sentiment Analysis of Earnings Calls",
        course: "Security Trading",
        tools: ["Python", "LLM/NLP", "Earnings Call Data"],
        description: "Used LLMs to generate numeric sentiment scores from CEO earnings call transcripts.",
        details: "Designed a sentiment-driven signal generation model using large language models to quantify management tone in earnings calls. The pipeline processed raw transcripts and scored confidence or caution.",
        category: "FinTech"
    },
    {
        title: "Live Trading Simulation – Sector Rotation & Hedging",
        course: "Security Trading",
        tools: ["Real-Time Sim Platform", "ETFs", "Analytics"],
        description: "Managed a $1M simulated portfolio with hedging, crypto, and sector ETF rotation.",
        details: "Managed a $1M simulated portfolio focused on macro-sensitive sector allocations. Integrated an inverse ETF (SQQQ) for downside protection during a market correction.",
        category: "Trading"
    },
    {
        title: "Multi-Asset Portfolio Optimization & Utility Scoring",
        course: "Portfolio Theory & Strategy",
        tools: ["Excel", "Monte Carlo", "Risk Decomposition"],
        description: "Simulated 1,000 market paths to build optimal portfolios under risk and payout constraints.",
        details: "Constructed a diversified 10-year portfolio using nine asset classes, simulating 1,000 market scenarios under inflation-adjusted payout constraints. Generated efficient frontiers and minimized downside risk.",
        category: "Portfolio Mgmt"
    },
    {
        title: "Strategic Long-Short Portfolio Design",
        course: "Portfolio Theory & Strategy",
        tools: ["Behavioral Alpha", "Commodity Hedging", "Event-Driven Arbitrage"],
        description: "Backtested three thematic long-short strategies targeting macro and behavioral inefficiencies.",
        details: "Developed and backtested three thematic long-short strategies: CEO Expertise Strategy, Commodity Producer vs. Consumer Strategy, and M&A Arbitrage.",
        category: "Portfolio Mgmt"
    },
    {
        title: "Behavioral Alpha Backtest – Alphabetical Bias Strategy",
        course: "Portfolio Theory & Strategy",
        tools: ["R", "quantmod", "PerformanceAnalytics"],
        description: "Tested alphabetical bias hypothesis through long-short portfolio returns benchmarked to S&P 500.",
        details: "Backtested a behavioral finance hypothesis suggesting investor preference for alphabetically earlier stocks. Constructed a long-short equity portfolio and benchmarked performance against the S&P 500.",
        category: "Quant Research"
    },
    {
        title: "Sector-Neutral Portfolio Construction with Inverse ETFs",
        course: "Portfolio Theory & Strategy",
        tools: ["Excel", "Yahoo Finance", "Ken French Library"],
        description: "Blended long equity with inverse ETFs to build sector-neutral portfolios and benchmarked performance.",
        details: "Engineered two sector-specific portfolios (Utilities & Healthcare) blending long equity positions with inverse ETFs to achieve sector-neutrality.",
        category: "Portfolio Mgmt"
    },
    {
        title: "Pershing Square’s Pandemic Trade – CDS Derivatives Case",
        course: "Financial Derivatives",
        tools: ["CDS", "Derivatives Pricing"],
        description: "Analyzed Bill Ackman's historic credit hedge using CDS during the COVID-19 market crash.",
        details: "Conducted a case-based analysis of Pershing Square's $2.6B credit hedge during COVID-19 using CDS structures. Evaluated payoff asymmetry, market timing, and strategic optionality.",
        category: "Derivatives"
    },
    {
        title: "Efficient Frontier Portfolio Optimization Dashboard",
        course: "Financial Modeling",
        tools: ["R", "Python", "PortfolioAnalytics", "tidyquant"],
        description: "Built an interactive tool to generate efficient frontiers and test portfolio allocations.",
        details: "Built a dynamic dashboard that generates Efficient Frontiers for user-defined portfolios. Computed volatility, expected returns, and Sharpe ratios.",
        category: "Modeling"
    },
    {
        title: "Interactive SHINY App for Technical Stock Analysis",
        course: "Financial Modeling",
        tools: ["R", "SHINY", "quantmod", "plotly"],
        description: "Created a web app for Bollinger Bands, momentum indicators, and real-time charts.",
        details: "Developed a SHINY web app in R for real-time technical analysis using Bollinger Bands, momentum oscillators, and pricing charts.",
        category: "FinTech"
    },
    {
        title: "SEC Filings Automation Using TidyEdgar",
        course: "Financial Modeling",
        tools: ["R", "tidyedgar"],
        description: "Led a live showcase on automating SEC 10-K and 10-Q filing extraction and analysis.",
        details: "Led a showcase on automating 10-K and 10-Q extraction from EDGAR using tidyedgar. Demonstrated earnings screening, compliance monitoring, and sentiment filtering.",
        category: "FinTech"
    },

    // MBA Projects
    {
        title: "Equity Valuation & Risk-Return Analysis Using CAPM",
        course: "Security Analysis and Portfolio Management",
        tools: ["Excel", "CAPM"],
        description: "Performed equity screening and CAPM valuation on Nifty 50 stocks.",
        details: "Calculated beta, expected return, and Sharpe ratio. Performed intrinsic and relative valuations using DDM and P/E models.",
        category: "Valuation"
    },
    {
        title: "IPO Simulation & Underwriter Analysis",
        course: "Merchant Banking and Financial Services",
        tools: ["Market Analysis"],
        description: "Simulated full IPO process including DRHP drafting, pricing, and book building.",
        details: "Designed IPO timeline and simulated underwriter selection. Analyzed oversubscription and market premium trends by benchmarking with real IPOs on NSE/BSE.",
        category: "Research"
    },
    {
        title: "International Trade Finance: LC Structuring & FX Hedging",
        course: "International Trade Finance",
        tools: ["Forex", "Trade Finance"],
        description: "Structured trade transactions using Letters of Credit and hedged FX exposures.",
        details: "Designed Letters of Credit under UCP 600. Modeled cash cycles, applied forfaiting and factoring, and used forwards to hedge currency risk for textile exporters.",
        category: "Finance"
    },
    {
        title: "HR Metrics Dashboard – Linking Turnover, Productivity & Profitability",
        course: "Strategic Human Resource Management",
        tools: ["Excel", "Power BI"],
        description: "Created KPI dashboards to analyze HR’s impact on financial performance.",
        details: "Visualized employee turnover, absenteeism, cost-per-hire, and training ROI in Excel and Power BI. Linked HR metrics to profit indicators.",
        category: "Analytics"
    },
    {
        title: "FMCG Brand Perception & Consumer Behavior Study",
        course: "Business Research Methods",
        tools: ["SPSS", "Statistics"],
        description: "Led a quantitative research project on brand switching behavior in FMCG.",
        details: "Collected data from 150 respondents. Performed regression and chi-square analysis using SPSS. Generated brand perception insights.",
        category: "Research"
    },
    {
        title: "Linear Programming for Supply Chain Optimization",
        course: "Data Analysis and Business Modelling",
        tools: ["Excel Solver"],
        description: "Applied LP to minimize costs in a 3-warehouse, 4-retailer supply chain model.",
        details: "Built a model in Excel Solver with constraints including capacity, MOQ, and regional demand. Conducted sensitivity analysis to demonstrate cost minimization.",
        category: "Modeling"
    },
    {
        title: "Comparative Financial Performance – Public vs Private Banks",
        course: "MBA Thesis – Anna University",
        tools: ["Ratio Analysis", "t-tests"],
        description: "Analyzed profitability, efficiency, and risk metrics across Indian banks (2017–2021).",
        details: "Compared SBI, HDFC, ICICI, and others on NPAs, cost-efficiency, and returns. Used t-tests and ratio analysis to assess sectoral gaps.",
        category: "Research"
    },
    {
        title: "Value at Risk (VaR) & Stress Testing for Equity Portfolio",
        course: "Portfolio Theory & Strategy",
        tools: ["Excel", "Python", "pandas", "numpy"],
        description: "Built a VaR model with back-testing and stress-tested an equity portfolio under market shocks.",
        details: "Developed a comprehensive Value at Risk (VaR) model using both historical simulation and parametric methods. Conducted back-testing and scenario-based stress testing to evaluate resilience.",
        category: "Risk Mgmt"
    }
];

export const researchData = [
    {
        title: "A Rigorous Exploration of the Black-Scholes-Merton Model",
        university: "University at Buffalo, 2025",
        platform: "ResearchGate",
        description: "Explored the limitations of the Black-Scholes-Merton model using Python-based simulations and stochastic calculus. Analyzed volatility surfaces and live pricing data to assess model accuracy.",
        link: "https://www.researchgate.net/publication/387657326_A_Rigorous_Exploration_of_the_Black-Scholes-Merton_Model_Quantitative_Finance_Fundamentals",
        date: "2025"
    },
    {
        title: "Financial Performance of Public vs Private Banks in India (2017–2021)",
        university: "Anna University | MBA Thesis, 2022",
        platform: "LinkedIn Project Summary",
        description: "Conducted a five-year comparative study of financial performance across 10 major Indian banks using ratio analysis and t-tests. Revealed public-sector inefficiencies driven by NPAs and cost structure.",
        link: "https://www.linkedin.com/in/aurokrishnaa/details/projects/1720046070890/single-media-viewer/?type=DOCUMENT&profileId=ACoAABBQ-CkBe-H4u92GdOBJFsiiSFdr8b3jyXg",
        date: "2022"
    }
];
