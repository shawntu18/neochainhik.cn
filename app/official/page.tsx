"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Box, Cpu, Globe, ShieldCheck, Zap } from "lucide-react";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function NeoChainLanding() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 200]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-cyan-500/30">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                        <motion.div
                            style={{ y: heroY, opacity: heroOpacity }}
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"
                        />
                    </div>

                    <div className="container relative z-10 px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6">
                                赋能中小企业 <br />
                                <span className="text-gradient">数字化转型</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                新一代工业互联网 SaaS 平台 | 仓储管理 | 生产执行 | 全链路追溯
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" className="w-full sm:w-auto group">
                                    观看演示
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    联系销售
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-slate-500 rounded-full" />
                        </div>
                    </motion.div>
                </section>

                <Section id="solutions" className="bg-slate-950">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                                核心 <span className="text-gradient-purple">解决方案</span>
                            </h2>
                            <p className="text-slate-400 max-w-xl mx-auto">
                                我们的平台利用尖端技术提供无与伦比的可视化和控制能力。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Box,
                                    title: "仓储管理 (WMS)",
                                    desc: "通过唯一数字ID管理物料，实现扫码出入库，库存实时准确。",
                                    color: "text-blue-400"
                                },
                                {
                                    icon: Cpu,
                                    title: "生产协同 (MES)",
                                    desc: "全流程生产进度可视化，BOM级物料消耗自动统计。",
                                    color: "text-purple-400"
                                },
                                {
                                    icon: Globe,
                                    title: "全链路追溯",
                                    desc: "从原材料到成品，一物一码，全生命周期可查询。",
                                    color: "text-cyan-400"
                                }
                            ].map((feature, index) => (
                                <Card key={index} className="group">
                                    <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* About / Trust Section */}
                <Section id="company" className="bg-slate-900/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    {/* Abstract Tech Visual */}
                                    <div className="aspect-video bg-slate-800 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                                        {/* Floating UI Elements Mockup */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="flex gap-4 mb-4">
                                                <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-lg border border-white/10 flex-1">
                                                    <div className="text-xs text-slate-400 mb-1">效率提升</div>
                                                    <div className="text-lg font-bold text-green-400">+127%</div>
                                                </div>
                                                <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-lg border border-white/10 flex-1">
                                                    <div className="text-xs text-slate-400 mb-1">响应延迟</div>
                                                    <div className="text-lg font-bold text-blue-400">12ms</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                                    <ShieldCheck className="w-4 h-4" />
                                    企业级数据安全
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                    深耕制造业 <br />
                                    <span className="text-white">服务行业领军企业</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    基于工业互联网标识解析体系，构建可信数据底座。我们的平台通过公安部备案，符合国家数据安全标准，确保您的企业数据安全无忧。
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { label: "活跃节点", value: "50k+" },
                                        { label: "日处理数据", value: "2M+" },
                                        { label: "系统可用性", value: "99.99%" },
                                        { label: "合作伙伴", value: "150+" },
                                    ].map((stat, i) => (
                                        <div key={i} className="border-l-2 border-slate-700 pl-4">
                                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-sm text-slate-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="relative rounded-3xl overflow-hidden p-12 text-center border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393798-2f619f943f3c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

                            <div className="relative z-10 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">准备好开启数字化转型了吗？</h2>
                                <p className="text-slate-300 mb-8 text-lg">立即加入工业 4.0 的行列，提升企业核心竞争力。</p>
                                <Button size="lg" variant="primary" className="shadow-xl shadow-blue-500/20">
                                    立即开始 <Zap className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
