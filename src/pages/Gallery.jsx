import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const galleryItems = [
  { src:'https://lh3.googleusercontent.com/aida-public/AB6AXuB-tr7tlaXQ1eolJPwrQOwbVfWUKWpPN0MW5O_Y_axgsTTwJJI4_RjguvNGHJeMByZj4FPjpUO-VJCvfQ3dM9DssJdwHutxDhGUIEl31E1NvP0-DD6jg90BuGTb_IhfRftPDIeZ6t2F7jYuMWeXXvg3XPSFDqf4MIaxc3OXXfpAVHVIJzV2g0DwIowveQ0P8sXADFttdR35r5GRjWoz8MDO1d2vwD5YgHf5PPHpR1Ta2-B-GNqm6Jn-iVHRd-qMp5LvOyHOZzg27av2', tag:'Community', caption:'The warmth of shared circles' },
  { src:'https://lh3.googleusercontent.com/aida-public/AB6AXuBkpAH2IOa0N3KE3O_FcYqtlzxEF0yaNWJUBcohBuzhaO_mt_xebwsom1BrbVOCehyTGalEHW4IPQM9MWpDdIWz4qOmMjZVJt2oQblUh26ATroWE96dQFlIN9KwuWEBD0gLtHPi4IV4pgJcuh7nHJvxd-LqssocqbPJoi5aCvtznMOod4rMe4b1nH5AzMp5Pc32-H_Lb9KUYo5vhhUB9V03Cg9tG8DCyYQAYZT6JyTCzPt4V4pGX5tH4yakYlepPhwOQ0iPxvg6-Qyc', tag:'Workshops', caption:'Morning stillness in Achintya' },
  { src:'https://lh3.googleusercontent.com/aida-public/AB6AXuAnobz_GLUyKHcvN_Z5dllRG6iZzaeGTphOtPLE_Pd9tHO1IpWla55k0tvf4tF7Q06kWYKnIjYZ4T-95jgEuRnoPO7Xo8MQeyQRCtJixjlU4eyDCndxsZSv13wkD3yKMfT6G0y5KXdeo5no0zL2jn8aUlzxImKR1PJdTOKb8RnN0yOOptF9dZVpacRQ1gAHRUOvcZbkphVzC6t9obC1_DnJLG__sSUbmHfqygInjf5HsC4z7LlGCXPdp_kW5b5ud-eGlyg_L03zoI8M', tag:'Outreach', caption:'Connections that cross borders' },
  { src:'https://lh3.googleusercontent.com/aida-public/AB6AXuC3sAyIlc9Q39OGUnDUoi7dRFMSxt_URxeNzD3nP6I7dWbOUGen3byzyEqMmV2rWkiJ2p5wYFHJ-C4EemrjEUnppf9qkQ9IMjwiZDGY3rHbyV0qc00eyh6prriSnKgEXVvls_dbCS1PHYfRmEhKHdmu7KWqjlpp7tRk0nJdg1k9q1gz6BhBM617I9OF0c8xejWM_F6ZEpuAmpI6i5BINwDgMpeSUvYmBR5HvCidL1x6RQ99-natjd4OD75bXZ0BsbGPofMzHTVu359x', tag:'Workshops', caption:'Expression through colors' },
  { src:'https://lh3.googleusercontent.com/aida-public/AB6AXuBCeNHHYmqtf3WVnM1wrlsdz8R2sUtVM1W6wU0glZnmIl_ykejTJesoVu0vlHO4zaBSRWlRY01gRaTevH2hzaaLIZg1qLTN7UkuLbOh8Bt6AuWYgwhmnFFplV3LP8qJv9I7QC0BpyXRas352clCQiJx7TftQUDbOQeMDihpN9CJRGmT53GfqSrdQlFhOVUepbmvJ3fNjuRixdGmkxNloiss4qOvQY3EV_ZHPITV-l_8T_qmJMrYDCUA11RGDCcZS3UW4kYVuqGmUC11', tag:'Events', caption:'The Annual Sanctuary Feast' },
  { src:'https://lh3.googleusercontent.com/aida-public/AB6AXuDadpdakmdh2pQvgdgHhIsFkoMocJBs_GeA4TWjabDPHGDpHiA6NXobidhJEnTnUbd-DBCiIuHT2yCpvcpKgHc9m_er8pqigkdYb2I1Hr04aIJ2HJ6taEebzXdjxuaHf0FA73zJYUeWjj7uvG6O5Yrdf55oJl8olqyF1pKDI5JVolUfG08ERr6TFU86mPbOAGeFUCBBDPhjLyWRteJDk6UMHusHOSMbnKYZTBMF202_y52vg0SomJnAUGqoiWO_LVxkp_I2V53xkgfH', tag:'Achintya', caption:'Dialogue on deep empathy' },
];

const filters = ['All','Workshops','Events','Achintya','Community','Outreach'];

export default function Gallery() {
  return (
    <div className="bg-surface font-body">
      <Navbar />
      <main className="pt-[72px]">

        {/* Hero */}
        <section className="h-[320px] bg-[#f8fdf8] flex items-center px-12 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto w-full z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="ribbon-xs"></div>
              <span className="font-neue text-xs tracking-[0.2em] uppercase text-primary/60">The Visual Archive</span>
            </div>
            <h1 className="font-mercury text-[96px] leading-[0.9] text-primary tracking-tighter">
              Moments of <br /> <span className="italic font-light">Togetherness</span>
            </h1>
            <p className="font-neue font-light text-[18px] text-primary/80 mt-6 max-w-xl">Every image tells a story of healing, community, and growth.</p>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px]"></div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-[72px] z-40 bg-surface border-b border-outline-variant/10 py-6 px-12">
          <div className="max-w-[1280px] mx-auto flex flex-wrap gap-3 items-center">
            {filters.map((f, i) => (
              <button key={f} className={`px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-neue font-medium transition-all hover:shadow-[0_0_10px_#9ae600] ${i === 0 ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-low text-primary/70 hover:bg-surface-container-high'}`}>
                <div className={`ribbon-xs scale-50 ${i === 0 ? 'ribbon-lime' : 'opacity-40'}`}></div>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <section className="px-12 py-24 max-w-[1280px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map(({ src, tag, caption }) => (
              <div key={caption} className="group relative overflow-hidden rounded-[20px] bg-surface-container-low break-inside-avoid shadow-sm cursor-pointer">
                <img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" src={src} alt={caption} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-secondary-fixed text-xs font-neue uppercase tracking-widest mb-1">{tag}</span>
                  <h3 className="font-apple italic text-2xl text-white">{caption}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 flex items-center justify-center gap-6 font-neue text-sm tracking-widest text-primary/60">
            <button className="hover:text-primary transition-colors">← PREV</button>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold">1</span>
              <span className="hover:text-primary cursor-pointer transition-colors">2</span>
              <span className="hover:text-primary cursor-pointer transition-colors">3</span>
            </div>
            <button className="hover:text-primary transition-colors">NEXT →</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
