import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">타자 연습</h1>
        <p className="subtitle">천지인 키보드로 한글을 연습해보세요</p>
      </div>
    </header>
  );
};

export default Header;
