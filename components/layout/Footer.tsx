"use client";

import React from 'react';

// 提示：等您拿到公安备案图标后，下载并放在 public/images/ 目录下
// import Image from 'next/image'; 

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-auto border-t border-white/10 bg-slate-950/50 text-center text-xs text-slate-400 backdrop-blur-md relative z-10">

            {/* 1. 版权信息 */}
            <div className="mb-4">
                &copy; {new Date().getFullYear()} 杻启元（深圳）科技有限公司 All Rights Reserved.
            </div>

            {/* 2. 备案信息栏 (Flex布局，居中对齐) */}
            <div className="flex justify-center items-center gap-4 flex-wrap">

                {/* ICP 备案号 (必须现在显示) */}
                <a
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-300"
                >
                    粤ICP备2025497183号-1
                </a>

                {/* --- 公安备案 (预留位，等拿到号后取消注释) --- */}
                {/* <a 
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030xxxxxxxxx" // 替换为您的公安备案链接
          target="_blank" 
          rel="noreferrer"
          className="flex items-center hover:text-white transition-colors duration-300"
        >
          <img 
            src="/images/gongan.png" // 公安警徽图标
            alt="公安备案" 
            className="w-4 h-4 mr-1"
          />
          粤公网安备 44030xxxxxxxxx号
        </a> 
        */}

            </div>
        </footer>
    );
}

export default Footer;
