import React from 'react';

const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f8f9fa', // 浅灰色背景
    color: '#6c757d', // 深灰色文字
    padding: '1rem', // 增加一些内边距
    textAlign: 'center', // 文字居中
};

const contentStyle: React.CSSProperties = {
    maxWidth: '1200px', // 内容的最大宽度
    margin: '0 auto', // 内容居中显示
    fontSize: '0.7rem', // 字体大小
};

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <div style={contentStyle}>
                {/* 版权 & 个人信息 */}
                <p>&copy; {new Date().getFullYear()} Powered by .NET 8.0 on Docker.</p>
                <p>联系方式: Noodles.Syy@outlook.com</p>
                {/* 这里可以添加你想展示的其他信息 */}
            </div>
        </footer>
    );
};

export default Footer;