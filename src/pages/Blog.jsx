import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const blogCards = [
  { img:'https://lh3.googleusercontent.com/aida-public/AB6AXuB_VYBq1QHvrEROlagGYKlWAMJgmguA_cjAFx4GlPGFDGaAZVFUcumZ8Vnf74Z0PT0yWvtptvyURnIU4FSpI-Th8DKUNRdB8Ik45j3rTcVCSE1BC8oZpRwNZVoknmmrFeZGiBnBQ3dnBy_G5s_yFSc2kM1MP5-1Uq656tfsDm5PWIu8JHTg7YrYRxX5DJz57MGQqIlvCRY7LVdZQnkIojzjFmyIDzqCYFtpsG756n2_UQY1hdUNlTF59ctH3EolKIvEaSZCeiQl0lkF', tag:'Research & Insights', title:'Breath as a Bridge: Neurobiology of Care', desc:'Exploring the physiological shifts when we practice collective mindfulness in crisis centers.', author:'Maya Ray', date:'Oct 20, 2024', authorImg:'https://lh3.googleusercontent.com/aida-public/AB6AXuDeoMw556btYMjnXg0c60GYDnKWfsM4L4UwmIh6XFOCY1-a--e-dbrXExb9Vj6YNTId6hIYwOFoaFzK2JudcKk6VobtkIraJhZ75qiOWL8c1w8h0aIzJ7-V143cuOgWOVz5Uznz_9RAfo0mhquBG8Fle79WPKYIl0S1wAQIRJCPnUDA5y9TZfr3yuMm2jpe7lIjVPwH3Xv5RAWBc0UenT1bmMdSbjEDWD_NCyruHSu7G770ZZeubkyK-_nXmtxsqwRwF07wZbrVSTF2' },
  { img:'https://lh3.googleusercontent.com/aida-public/AB6AXuDItiFUdFQIWohYtBfnnL1RMrZ-hTrPhGqVfgk2lFJ0PS5CnWIAVjbdlP2VyWYvbyKzfeiOkKxoPA2DxU4DEyv-piVDp1ierEV_Dw4y-0ZXjUg2gYRwKojW8FzFYmEVyHTIh-iRjeRnrh3ppgos5KCb6d_0lZh23_3PSRnrVkoHkLJ5XAal7WiOGGV2ooxE86bxBag4nVvw3vKQwEKjJnvYpCPicTsyoH1Fj8SpELEmI1Af_Pfd5wMChgG8-5JZqjpiiMK9vI-uGpkb', tag:'Creative Arts', title:'Ink and Empathy: Writing Your Way Home', desc:'How creative writing workshops help trauma survivors reclaim their personal narratives.', author:'Julian Moss', date:'Oct 18, 2024', authorImg:'https://lh3.googleusercontent.com/aida-public/AB6AXuDW2JrUjmu3W2Sc-_aZ0DILyYK3fjgZ_u0u5IFX6AnXvQuY_RWYP8Q8Rjq3dib9bSIonDyRg4Xs-HCsr1BFpBPHGWV6oBS6Gceq696uEy6l4maU64TjCsv3xK44LrJvQTqcquWm9m3q9XfxSwJOBlmCnqfRIu8vY4z-N9r59vXFdCR_HmoeOronIxbbDQu3iAwZtIXcrg-qXUcG_A8tXkXgeH12ipc0z2rEyURRFYKGL6L19JhRX6tTpfnm6MqC46HTac2JHaKQ18tJ' },
  { img:'https://lh3.googleusercontent.com/aida-public/AB6AXuD67NfMEK7kpZkKj7eG_m-8MyHdrkBP03AcUpHC0Da7MFYUI5RPGpJLmf3hy1p8nhi5aedfPscuL6WOvOC95-q9qWfttiqPapNJY_zSxrrKO4wM-q0hoaRSVwgLUji8n25O9Qi_SPZkL_gX00WG5AEvTqWsa-Nq3H4k5TrX1W2bO2bV-Icc2cvc5NFxeoH-ZrbdtILkEIZRQW3Rs5n9OGDvGvd198GXf07raV7cCuuY8ApG9MfhFDGuCbaUQkHGIJ-XpYl44x0tnXQ6', tag:'Community Stories', title:'Building the Collective Safety Net', desc:'A look into our neighborhood initiatives providing 24/7 peer support systems.', author:'Sarah K.', date:'Oct 15, 2024', authorImg:'https://lh3.googleusercontent.com/aida-public/AB6AXuB8g6UgnixoGfoApE6vwHVeWaOcHRFghfrdumiEidxgNf-33yhZ3acIDNcW7uT0eYPVdRTOrgbBpYm419DITs_M2cK1EDUAggFbmohhJsGppepTsphwdDYYFmeex4gPiiOKDs3cfT1Pb6e6U5a6P1LoBADdyo3LdZea_Rm_CRlESaYjDF0GrRsVnC6cMSgtM_OpmvxEjcmipn3gTrct19VA_ztmXSfagTy73WrXNa4g3GZNeBujGK3l51QOZq3e0YKwatWqLUnqptJR' },
  { img:'https://lh3.googleusercontent.com/aida-public/AB6AXuCYZyQ91hiNOnkpvVQHn0s8662_dzUbOAUWn4719vmMPX6hzXe7MWP4O5JFgAyGNhsDfirgBykbTYR-Cur-HtX4FbEC0p7rgj73owXBiRR9c9ddTMKCxLvKLZgGyfylx2yzVwWGRDbvUNErslIG9--ipCByBIBlf7qICeM8OmaEHzHAMIaplau4He6OXZqCIEOovjRV2V6zC-SHULGYunUIOds3sKpTW_H-JDm21llNs11S8tNaw7uKjKls26_nqOvhsXBa6p9St8GH', tag:"Founder's Notes", title:'Why Vulnerability is a Radical Act', desc:"An editorial on the importance of soft spaces in a world that demands hardness.", author:'Arjun Mehta', date:'Oct 12, 2024', authorImg:'https://lh3.googleusercontent.com/aida-public/AB6AXuA4wb8XfLQeH2vRMRIuVEsNOKfFXJHBZ4VTDi44I2hyhfKCTiUw3z_4wp6Ls9bGlvJzSx3asdncEya3V-DAb6OlqJcRmSjJj0D2mTae6A2LLPoCDfcpl51AYTId09ewy1ttt2dTwVGMOEfFJaAjFXC79YDof_Ndz9qntwGPLFYfGLUp4ajqYBnhVZ_fkq8fKUvSHjHfLQfRI1gm2BmqOQ30ny0YiYy5yQxBzdDwrFoMc0_zavygp4Nj2UExxNrYdGpGJdvHda2mbGiF' },
];

export default function Blog() {
  return (
    <div className="font-body bg-[#fbf9f8] text-[#1b1c1c]">
      <Navbar />
      <main className="pt-[72px]">
        <section className="h-[320px] flex flex-col justify-center px-12 max-w-[1440px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[#115238] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-3 h-3 bg-[#9ae600]" style={{mask:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2L4 5v11c0 5.25 3.41 10.19 8 12 4.59-1.81 8-6.75 8-12V5l-8-3z'/></svg>\") no-repeat center",WebkitMask:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2L4 5v11c0 5.25 3.41 10.19 8 12 4.59-1.81 8-6.75 8-12V5l-8-3z'/></svg>\") no-repeat center"}}></span>
            SHOHOJATRI JOURNAL
          </span>
          <h1 className="font-mercury italic text-6xl text-primary leading-tight mb-2">Words That Heal</h1>
          <p className="text-[18px] text-stone-600 font-light max-w-2xl">Perspectives on mental health, community, and the art of healing together.</p>
        </section>

        <section className="px-12 max-w-[1440px] mx-auto pb-24">
          <div className="w-full flex mb-24 rounded-[24px] overflow-hidden blog-card-shadow bg-white" style={{height:'420px'}}>
            <div className="w-[55%] h-full"><img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhTfwlZsFZA79z0YzdeUNW_l2gkTgnwRl1nkPbsKNLwzUp5ABA40vYX7mJ2bATzoDZ3EH2L8qpm_3X9-lTuLkCIl26Iw5Y4hHZfSEou-axGvRZ5Odlur8NJgfXWYfGvo35X1awXAc1SgnpeN3dwpn3b_qhc0UOjVYXb4x8MAN2NCuzqG-6Pq-Rp111akXD6sIVRQ5hDHtjuZRgQTDNnmTq_YorQEJlg75FnaR2_NfHTWpzNvmW3716ZqJFmARRNnhIdw0D51d8xn6v" alt="Featured" /></div>
            <div className="w-[45%] p-12 flex flex-col justify-center bg-white">
              <span className="inline-block bg-[#9ae600] px-3 py-1 rounded-full text-[#2e6a4f] text-xs font-bold w-max mb-6">FEATURED</span>
              <h2 className="font-mercury italic text-[36px] text-[#2e6a4f] leading-tight mb-4">The Quiet Strength of Shared Silence</h2>
              <p className="text-stone-600 font-light text-[16px] leading-relaxed mb-6 line-clamp-3">In our hyper-connected world, the most profound forms of healing often happen in the quiet moments between spoken words...</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-[12px] text-stone-400"><span className="font-semibold text-stone-600">Dr. Aranya Sen</span> • Oct 24, 2024</div>
                <a className="text-[#C25E7A] font-semibold text-sm inline-flex items-center gap-2" href="#">Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[70%] space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogCards.map(({ img, tag, title, desc, author, date, authorImg }) => (
                  <div key={title} className="bg-white rounded-[24px] p-9 blog-card-shadow border border-[#2e6a4f]/5 hover:-translate-y-2 transition-transform duration-300">
                    <img className="w-full h-[240px] object-cover rounded-[16px] mb-6" src={img} alt={title} />
                    <span className="inline-block bg-[#9ae600] px-3 py-1 rounded-full text-[#2e6a4f] text-[10px] font-bold mb-4 uppercase tracking-wider">{tag}</span>
                    <h3 className="font-garamond text-[24px] text-[#2e6a4f] leading-snug mb-3">{title}</h3>
                    <p className="text-stone-600 font-light text-[14px] leading-relaxed mb-6 line-clamp-2">{desc}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                      <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden"><img src={authorImg} alt={author} className="w-full h-full object-cover" /></div>
                      <div className="text-[12px]"><p className="font-semibold text-stone-800">{author}</p><p className="text-stone-400">{date}</p></div>
                      <a className="ml-auto text-[#C25E7A] text-sm" href="#"><span className="material-symbols-outlined">arrow_forward</span></a>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-6 text-primary font-semibold border-2 border-primary/10 rounded-xl hover:bg-primary hover:text-white transition-colors">Load More Entries</button>
            </div>

            <aside className="lg:w-[30%] space-y-12">
              <div className="relative">
                <input className="w-full bg-white border border-stone-200 rounded-full py-4 px-6 focus:outline-none text-stone-600 placeholder:text-stone-400" placeholder="Search the sanctuary..." type="text" />
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-[#2e6a4f]">search</span>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold text-[#C25E7A] uppercase tracking-[0.2em] mb-6">CATEGORIES</h4>
                <ul className="space-y-4">
                  {[['Mental Health',12],['Community Stories',8],['Creative Arts',6],["Founder's Notes",4],['Research & Insights',5]].map(([cat, count]) => (
                    <li key={cat} className="flex items-center justify-between cursor-pointer group">
                      <span className="text-stone-700 group-hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors">{cat}</span>
                      <span className="text-xs text-stone-400">({count})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
