import Navbar from "../navbar/Navbar.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../Button.tsx";
import {useTonAddress} from "@tonconnect/ui-react";

const HomePage = () => {
    const navigate = useNavigate();
    const handleCreateTicket = () => {
        navigate('/create');
    };

    const handleWatchTicket = () => {
        navigate('/ticket');
    };

    const userFriendlyAddress = useTonAddress();

    return (
        <>
            <Navbar/>
            <h1>TonA</h1>
            <div style={{
                display: 'flex',
                margin: 'auto',
                width: 'max-content',
                gap: '10px'
            }}>
                <button className="button-32" onClick={handleCreateTicket}>Create tickets</button>
                <button className="button-32" onClick={handleWatchTicket}>Watch my tickets</button>
            </div>
            <div style={{
                display: 'flex',
                margin: 'auto',
                width: 'max-content',
                gap: '10px',
                marginTop: '10px'
            }}>
                <Button address={userFriendlyAddress}></Button>
            </div>
        </>
    );
}

export default HomePage;