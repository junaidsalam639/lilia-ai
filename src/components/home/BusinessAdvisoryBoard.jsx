import AdvisoryBoardSlider from "./AdvisoryBoardSlider";


const advisors = [
    {
        name: "Harry Ross, MD",
        bio: "Dr. Ross received his medical degree from Oregon Health Sciences University in 1991, and then went on to complete both surgical internship and residency in Emergency Medicine at Hennepin County Medical Center before obtaining Emergency Medicine Board Certification. Besides being a physician, he has over 20 years of experience as a healthcare entrepreneur and corporate investor. He has co-founded numerous medical device and pharmaceutical companies, including Cymbidium Medical, Vertos Medical, and RxKinetix, for which he was awarded Colorado Biotech Company of the Year. He was also Managing Partner at Aweida Ventures, a venture capital firm based in the Greater Denver area, where he specialized in Health Science investments. In addition to numerous corporate boards, he has also served on advisory boards at the University of Colorado Tech Transfer, University of Colorado Medical Center, Colorado School of Mines, and Children’s Hospital of Colorado.",
        specialty: "Medical Technology",
        experience: "20+ years",
    },
    {
        name: "Donald Schomer, MD, MBA, MSME",
        bio: "Dr. Schomer is a board-certified neuroradiologist, inventor, engineer, and health system leader in cancer imaging. He is Professor and past Chairman of the Department of Neuroradiology at the University of Texas M.D. Anderson Cancer Center. He holds several patents and has founded multiple medical device, biotech, and technology companies that have been successfully acquired. Dr. Schomer went to medical school and performed his residency in diagnostic radiology at the University of Texas Health Science Center at San Antonio. He then completed a clinical fellowship in neuroradiology at Stanford University School of Medicine. He attended Rice University, from where he received his MBA, and the University of Houston, where he received his MSME in Mechanical Engineering and BS in Biophysics.",
        specialty: "Neuroradiology",
        experience: "20+ years",
    },
    {
        name: "Lindsay Cosimano, APR, MBA",
        bio: "Ms. Cosimano is a nationally recognized healthcare marketing executive and brand strategist with more than 25 years of strategic marketing experience. Ms. Cosimano is nationally accredited by the Public Relations Society of America and is the Vice President of Marketing and Operations for Nebraska Health Network, an Accountable Care Organization serving Methodist Health System and Nebraska Medicine. Prior to joining the NHN, Cosimano founded and led a strategic marketing agency, guiding clients across diverse industries. She spent nearly 15 years as chief marketing officer for a healthcare venture firm. In addition to teaching at Rice University, Ms. Cosimano is an adjunct professor at the University of Nebraska at Omaha College of Business. She serves on the Society for Health Care Strategy and Market Development Board of Directors and is past president of the Board of Directors for PRSA Nebraska, Nebraska Healthcare Marketers, and The Wellbeing Partners. Ms. Cosimano earned her Master of Business Administration degree from the University of Nebraska at Omaha and her Bachelor of Science degree in business communications from the University of Kansas William Allen White School of Journalism.",
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
