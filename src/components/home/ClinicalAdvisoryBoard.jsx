import AdvisoryBoardSlider from "./AdvisoryBoardSlider";


const advisors = [
    {
        name: "Kennith Layton, MD, MBA",
        bio: "As a board-certified interventional neuroradiologist with over 20 years of clinical experience, Dr. Layton is a nationally recognized leader in interventional radiology. He currently serves as the Department Chairman of Radiology and as the Director of Interventional neuroradiology at Baylor University Medical Center in Dallas, Texas.",
        specialty: "Interventional Neuroradiology",
        experience: "20+ years",
    },
    {
        name: "Waseem Wahood, MD, MS",
        bio: "Dr. Wahood is an interventional radiology resident at the University of Miami. He has over 70 scientific publications in leading neuroscience and radiology journals. Dr. Wahood earned his MD through Nova Southeastern University and his MS from Rosaling Franklin University.",
        specialty: "Interventional Radiology",
        experience: "",
    },
    {
        name: "Christopher Graffeo, MD, MS",
        bio: "Dr. Graffeo is a Mayo Clinic trained cerebrovascular neurosurgeon with a Masters in Science in Clincal Research from the Mayo Clinic Graduate School of Biomedical Sciences. With over 190 scientific publications, he practices as a neurosurgeon and researcher at the University of Oklahoma Medical Center. He also serves on multiple editorial boards to include the Journal of Neurosurgery.",
        specialty: "Cerebrovascular Neurosurgery",
        experience: "",
    },
];


const ClinicAdvisoryBoard = () => {

    return (
        <>
            <AdvisoryBoardSlider
                advisors={advisors}
                heading="Clinical Advisory Board"
                text="Our Clinical Advisory Board features leading physicians and researchers who ensure our solutions align with the highest standards of patient care and medical excellence."
            />
        </>
    )
}

export default ClinicAdvisoryBoard
