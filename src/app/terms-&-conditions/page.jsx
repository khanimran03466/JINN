import TermsAndConditions from "@/components/single/TermsAndConditions";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms and Conditions that govern your access to and use of DJINN's services.",
};
const page = () => {
    return (
        <>
            <TermsAndConditions />
        </>
    )
}

export default page