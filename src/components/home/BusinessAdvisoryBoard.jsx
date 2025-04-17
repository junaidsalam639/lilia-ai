import AdvisoryBoardSlider from "./AdvisoryBoardSlider";


const advisors = [
    {
        name: "Harry Ross, MD",
        bio: "Harry is a successful serial entrepreneur in the medical technology space with over 20 years of experience as a healthcare entrepreneur. He has founded and sold multiple MedTech companies. Throughout his ventures, he has achieved multiple FDA MedTech product approvals. His experience is complemented by his former experience as Managing Partner for Healthcare Investments at Aweida Venture Partners.",
        specialty: "Medical Technology",
        experience: "20+ years",
    },
    {
        name: "Donald Schomer, MD, MBA, MSME",
        bio: "Dr. Schomer is a successful serial entrepreneur and inventor with over 20 years of experience in healthcare entrepreneurship. He holds numerous patents and has achieved multiple MedTech exits with FDA device approvals. He is a globally recognized neuroradiologist and health system leader at MD Anderson Cancer Center.",
        specialty: "Neuroradiology",
        experience: "20+ years",
    },
    {
        name: "Lindsay Cosimano, MBA",
        bio: "Lindsay is a nationally recognized healthcare marketing executive and brand strategist with more than 20 years of experience in healthcare marketing and sales. Her previous roles include Chief Marketing Officer and Lead Consultant for multiple healthcare companies. Lindsay also serves as a Marketing Professor at Rice University's Jones Graduate School of Business.",
        specialty: "Healthcare Marketing",
        experience: "20+ years",
    },
]


const BuisnessAdvisoryBoard = () => {

    return (
        <>
            <AdvisoryBoardSlider
                advisors={advisors}
                heading="Business Advisory Board"
                text="Our Business Advisory Board comprises seasoned entrepreneurs and industry leaders who provide strategic guidance to drive innovation and growth."
            />
        </>
    )
}

export default BuisnessAdvisoryBoard
