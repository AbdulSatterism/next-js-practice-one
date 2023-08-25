import Navbar from "@/components/Navbar";

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}

            <footer>copyright@2023</footer>
        </div>
    );
};

export default WithLayout;