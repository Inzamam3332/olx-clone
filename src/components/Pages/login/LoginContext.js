import React, { createContext, useState } from "react";

// Create the context
export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to open modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to close modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isModalVisible,
        showModal,
        handleCancel,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
