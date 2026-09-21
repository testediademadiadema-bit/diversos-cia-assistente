import { useMemo, useState } from 'react';
import styles from './_index.module.css';

const sampleData = {
  sales: 12840, orders: 47, clients: 328, stock: 86, appointments: 12,
  products: [
    { name: 'Copo Metálico Personalizado', price: 34.9, stock: 18, tag: 'MAIS VENDIDO' },
    { name: 'Arte para Divulgação', price: 49.9, stock: 31, tag: 'SERVIÇO' },
    { name: 'Kit Identidade Express', price: 119.9, stock: 7, tag: 'OFERTA' },
  ],
};

const money = (v:number) => v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

export default function IndexPage() {
  const [section, setSection] = useState('Visão geral');
  const [showOffer, setShowOffer] = useState(false);
  const trend = useMemo(() => [32,48,41,64,58,76,91,84,103,97,118,128], []);

  return <main className={styles.shell}>
    <aside className={styles.sidebar}>
      <div className={styles.brand}><span className={styles.mark}>D</span><div><b>Diversos</b><small>& CIA</small></div></div>
      <div className={styles.status}><i/> operação online</div>
      <nav>{['Visão geral','Vendas','Clientes','Estoque','Agenda','Marketing'].map((item,i)=><button key={item} className={section===item?styles.active:''} onClick={()=>setSection(item)}><span>{['⌂','↗','◎','▦','◷','✦'][i]}</span>{item}</button>)}</nav>
      <div className={styles.sidebarFoot}><small>ASSISTENTE OPERACIONAL</small><strong>Venda. Organize.<br/>Divulgue.</strong></div>
    </aside>
    <section className={styles.content}>
      <header className={styles.header}><div><span className={styles.eyebrow}>SEGUNDA · 21 SET 2026</span><h1>{section}</h1></div><div className={styles.headerActions}><button className={styles.ghost}>⌕ <span>Buscar</span></button><button className={styles.notify}>●</button><button className={styles.avatar}>CS</button></div></header>
      <div className={styles.hero}><div><span className={styles.pill}>● NEGÓCIO EM MOVIMENTO</span><h2>Seu negócio,<br/><em>no controle.</em></h2><p>Uma central para vender, atender clientes, organizar serviços e transformar ofertas em movimento.</p></div><button onClick={()=>setShowOffer(true)} className={styles.cta}>＋ Criar publicação <span>→</span></button></div>
      <div className={styles.kpis}>{[['Faturamento',money(sampleData.sales),'↑ 18,4%'],['Pedidos',''+sampleData.orders,'↑ 12,8%'],['Clientes',''+sampleData.clients,'↑ 8,2%'],['Agenda',''+sampleData.appointments,'hoje']].map(([a,b,c])=><article key={a}><span>{a}</span><strong>{b}</strong><small>{c}</small></article>)}</div>
      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.chart}`}><div className={styles.cardHead}><div><span>DESEMPENHO</span><h3>Vendas no período</h3></div><select><option>Últimos 30 dias</option><option>Este mês</option></select></div><div className={styles.chartArea}>{trend.map((v,i)=><div key={i} className={styles.barWrap}><div className={styles.bar} style={{height:`${v}%`}}/><small>{i%3===0?`${i+1}º`:''}</small></div>)}</div><div className={styles.chartTotal}><b>{money(12840)}</b><span> faturados no período</span></div></article>
        <article className={styles.card}><div className={styles.cardHead}><div><span>ATENÇÃO</span><h3>Estoque</h3></div><button className={styles.link}>Ver tudo →</button></div><div className={styles.stock}><div><b>86</b><span> itens em estoque</span></div><div className={styles.stockLine}><i style={{width:'68%'}}/></div><small>7 itens com estoque baixo</small></div><div className={styles.miniRows}>{sampleData.products.map(p=><div key={p.name}><span>{p.name}</span><b>{p.stock}</b></div>)}</div></article>
      </div>
      <div className={styles.bottomGrid}><article className={styles.card}><div className={styles.cardHead}><div><span>PRÓXIMOS</span><h3>Agenda de hoje</h3></div><button className={styles.link}>Abrir agenda →</button></div>{[['09:00','Arte para campanha','Cliente novo'],['11:30','Manutenção de notebook','Retorno'],['15:00','Entrega personalizada','Copo metálico']].map(x=><div className={styles.agenda} key={x[0]}><time>{x[0]}</time><div><b>{x[1]}</b><small>{x[2]}</small></div><span>›</span></div>)}</article><article className={styles.card}><div className={styles.cardHead}><div><span>MARKETING</span><h3>Transforme produto em oferta</h3></div></div><div className={styles.offer}><div className={styles.offerIcon}>✦</div><div><b>Publique em segundos.</b><p>Escolha um produto, defina o preço e gere sua comunicação.</p></div><button onClick={()=>setShowOffer(true)}>Criar oferta →</button></div></article></div>
      <footer className={styles.footer}><span>DIVERSOS & CIA · ASSISTENTE OPERACIONAL</span><span>Tudo conectado em um só lugar.</span></footer>
    </section>
    {showOffer && <div className={styles.modalBackdrop} onClick={()=>setShowOffer(false)}><div className={styles.modal} onClick={e=>e.stopPropagation()}><button className={styles.close} onClick={()=>setShowOffer(false)}>×</button><span className={styles.pill}>✦ MARKETING</span><h2>Nova publicação</h2><p>Vamos transformar seu produto em uma oferta pronta para WhatsApp e Instagram.</p><label>Produto<select><option>Copo Metálico Personalizado</option><option>Kit Identidade Express</option></select></label><label>Mensagem<textarea defaultValue="Oferta especial! Só hoje: aproveite essa condição exclusiva."/></label><button className={styles.cta}>Gerar publicação →</button></div></div>}
  </main>;
}