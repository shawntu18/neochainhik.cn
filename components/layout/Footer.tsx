"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-slate-900 border-t border-slate-800 pt-12 pb-6 text-slate-400 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-slate-200 font-bold mb-4">关于杻启元</h3>
                        <p className="leading-relaxed text-xs">
                            杻启元（NeoChain）致力于为制造业提供先进的数字化转型解决方案。我们通过工业互联网技术、SaaS管理平台及智能硬件，帮助企业实现生产透明化、库存精准化及全链路追溯。
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div>
                        <h3 className="text-slate-200 font-bold mb-4">联系方式</h3>
                        <ul className="space-y-2 text-xs">
                            <li>杻启元（深圳）科技有限公司</li>
                            <li>地址：<span className="font-bold text-slate-300">深圳市宝安区石岩街道塘头社区松白公路西侧宗泰电商科创园A311B</span></li>
                            <li>电话：<span className="font-bold text-slate-300">+86-198-7300-0002</span></li>
                            <li>邮箱：<span className="font-bold text-slate-300">shawn_tu@neochainhk.com</span></li>
                        </ul>
                    </div>

                    {/* Column 3: Links */}
                    <div>
                        <h3 className="text-slate-200 font-bold mb-4">快速链接</h3>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <Link href="/official" className="hover:text-white transition-colors">
                                    解决方案
                                </Link>
                            </li>
                            <li>
                                <Link href="/portal" className="hover:text-white transition-colors">
                                    客户登录
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        &copy; {new Date().getFullYear()} 杻启元（深圳）科技有限公司 All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://beian.miit.gov.cn/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            粤ICP备2025497183号-1
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
