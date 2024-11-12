import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #007bff, #6a11cb);
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-top: 10px;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: ${({ color }) => color || "#007bff"};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  width: 48%;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#0056b3"};
  }
`;

const DraftPreview = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 15px;
  font-style: italic;
`;

const Popup = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const AboutMe = () => {
  const [aboutText, setAboutText] = useState("");
  const [draft, setDraft] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSaveDraft = () => setDraft(aboutText);
  const handleSubmit = () => {
    alert("About Me Submitted: " + aboutText);
  };

  const handleSignOut = () => {
    setPopupVisible(true);
    setTimeout(() => {
      // Redirect to the login page after a few seconds
      window.location.href = "/login"; // Replace with your login page route if using React Router
    }, 2000); // Wait 2 seconds before redirecting
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>About Me</Title>
        <TextArea
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          placeholder="Write something about yourself..."
        />
        <ButtonGroup>
          <Button color="#28a745" hoverColor="#218838" onClick={handleSaveDraft}>
            Save as Draft
          </Button>
          <Button color="#007bff" hoverColor="#0056b3" onClick={handleSubmit}>
            Submit
          </Button>
        </ButtonGroup>
        {draft && <DraftPreview><strong>Draft:</strong> {draft}</DraftPreview>}
        <Button
          color="#dc3545"
          hoverColor="#c82333"
          onClick={handleSignOut}
          style={{ marginTop: "20px" }}
        >
          Sign Out
        </Button>
      </ContentWrapper>
      <Popup show={popupVisible}>
        Logout Successful. Thank you!
      </Popup>
    </Container>
  );
};

export default AboutMe;
