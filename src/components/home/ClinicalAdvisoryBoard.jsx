import AdvisoryBoardSlider from "./AdvisoryBoardSlider";


const advisors = [
    {
        name: "Kennith Layton, MD, MBA",
        bio: "Dr. Layton is a board-certified, nationally recognized interventional neuroradiologist with over 20 years of clinical experience. He is the Director of Interventional Neuroradiology and a past Chairman of the Department of Radiology at Baylor University Medical Center in Dallas. He received his medical degree from the University of Oklahoma, and then went on to complete his residency in diagnostic radiology at Baylor University Medical Center in Dallas and fellowship in interventional radiology at the Mayo Clinic in Rochester, Minnesota. ",
        specialty: "Interventional Neuroradiology",
        experience: "20+ years",
    },
    {
        name: "Waseem Wahood, MD, MS",
        bio: "D. Wahood is an interventional radiology resident at the University of Miami. He has over 70 peer-reviewed scientific publications in leading neuroscience and radiology research journals. Dr. Wahood received his MD from Nova Southeastern University and his MS from Rosalind Franklin University.",
        specialty: "Interventional Radiology",
        experience: "",
    },
    {
        name: "Christopher Graffeo, MD, MS",
        bio: "Dr. Graffeo is a nationally recognized neurosurgeon at the University of Oklahoma Department of Neurosurgery and Editor-in-Chief of Journal of Neurological Surgery Reports. He has published 190 peer-reviewed scientific publications and 6 book chapters. He has received dozens of state, national, and international awards, including the Balfour Award and Mayo Brothers Foundation Award, which are the highest honors given to Mayo Clinic trainees for research and clinical achievements. Dr. Graffeo received his medical degree from New York University School of Medicine and completed his neurosurgery residency at the Mayo Clinic in Rochester, Minnesota. He then completed his fellowship in cerebrovascular and skull base neurosurgery at the Barrow Neurological Institute in Phoenix, Arizona. He also holds an MS in Clinical and Translational Science from the Mayo Clinic Graduate School of Biomedical Sciences. ",
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
