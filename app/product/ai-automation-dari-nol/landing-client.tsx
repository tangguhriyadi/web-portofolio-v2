"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./landing.css";

const COVER = "/ebook-cover-idn.png";

export default function LandingClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const ch1BtnRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [ch1Open, setCh1Open] = useState(false);
  const [stickyShow, setStickyShow] = useState(false);

  // Scroll-reveal animations (skipped for reduced motion).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll(".reveal");
    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {}
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mobile sticky buy bar: appears after the hero scrolls out of view.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !("IntersectionObserver" in window)) {
      setStickyShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => setStickyShow(!en.isIntersecting));
      },
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  function toggleCh1() {
    setCh1Open((open) => {
      if (open) {
        ch1BtnRef.current?.scrollIntoView({ block: "center" });
      }
      return !open;
    });
  }

  return (
    <div className="ebl" data-theme={theme} ref={rootRef}>
      <header>
        <div className="wrap nav">
          <div className="brand">
            <span className="dot" aria-hidden="true"></span>
            <span className="t">AI Automation Dari Nol</span>
          </div>
          <div className="nav-right">
            <button
              className="theme-btn"
              type="button"
              aria-label="Ganti mode terang dan gelap"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              ◐
            </button>
            <a className="btn small" href="#" role="button">
              Ambil ebook · <span>IDR 79K</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-h" ref={heroRef}>
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="kicker">AI Automation Dari Nol · Level Basic</span>
                <h1 id="hero-h">
                  Dari nol jadi <em>AI Automation Engineer</em>, tanpa gelar IT.
                </h1>
                <p className="lede">
                  Saya berangkat dari lulusan Manajemen yang usahanya bangkrut sampe kerja
                  full-time remote sebagai AI Automation Engineer kurang dari setahun. Tanpa
                  bootcamp, tanpa background tech. Ebook 67 halaman ini adalah jalur persis
                  yang saya lewati, disusun ulang biar kamu bisa jalanin sendiri dengan praktek,
                  bukan cuma baca.
                </p>
                <div className="hero-ctas">
                  <a className="btn" href="#" role="button">
                    Mulai praktek hari ini{" "}
                    <span className="arr" aria-hidden="true">
                      →
                    </span>
                  </a>
                  <div className="price-tag">
                    <span className="p">IDR 79K</span>
                    <span className="s">sekali bayar · langsung download PDF</span>
                  </div>
                </div>
                <div className="chips" aria-label="Sekilas isi ebook">
                  <span className="chip">67 halaman</span>
                  <span className="chip">25+ screenshot asli</span>
                  <span className="chip">3 workflow siap import</span>
                  <span className="chip">15 template prompt AI</span>
                  <span className="chip">bisa dibaca di semua device</span>
                </div>
              </div>
              <div className="cover-col">
                <div className="cover-frame">
                  <Image
                    src={COVER}
                    width={1024}
                    height={1024}
                    preload
                    sizes="(max-width: 860px) 90vw, 340px"
                    alt="Cover ebook: AI Automation Dari Nol (Level Basic)"
                  />
                </div>
              </div>
            </div>

            {/* workflow diagram */}
            <div
              className="flow reveal"
              role="img"
              aria-label="Diagram workflow yang kamu bangun di ebook: form web mengirim data ke node analisis sentimen AI, logika kondisional meneruskan feedback negatif ke alert email instan, dan semuanya tercatat ke database."
            >
              <div className="flow-title">{"// sistem yang bakal kamu bangun di bab terakhir"}</div>
              <div className="flow-track" aria-hidden="true">
                <div className="node">
                  <div className="n-icon">📝</div>
                  <div className="n-name">Form web live</div>
                  <div className="n-sub">tanpa koding</div>
                </div>
                <div className="link-line"></div>
                <div className="node hot">
                  <div className="n-icon">🧠</div>
                  <div className="n-name">Analisis AI</div>
                  <div className="n-sub">sentimen + topik</div>
                </div>
                <div className="link-line"></div>
                <div className="node">
                  <div className="n-icon">🔀</div>
                  <div className="n-name">IF: negatif?</div>
                  <div className="n-sub">logika kondisional</div>
                </div>
                <div className="link-line"></div>
                <div className="node hot">
                  <div className="n-icon">✉️</div>
                  <div className="n-name">Alert email</div>
                  <div className="n-sub">langsung terkirim</div>
                </div>
                <div className="link-line"></div>
                <div className="node">
                  <div className="n-icon">🗄️</div>
                  <div className="n-name">Log database</div>
                  <div className="n-sub">terstruktur + timestamp</div>
                </div>
              </div>
              <p className="flow-note">
                Itu sistem feedback pelanggan beneran, jenis sistem yang bisnis rela bayar mahal.
                Kamu bangun sendiri pake tanganmu, terus jadiin portofolio pertamamu.
              </p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story" aria-labelledby="story-h">
          <div className="wrap">
            <div className="story-grid">
              <div className="reveal">
                <span className="kicker">Kenapa dengerin saya?</span>
                <h2 id="story-h">Saya bukan lulusan IT, justru itu poinnya.</h2>
                <blockquote>
                  &ldquo;Sebelum 2022, saya nggak bisa jawab apa itu API. Sekarang saya kerja
                  remote sebagai AI Automation Engineer buat perusahaan di New Zealand, digaji
                  dollar.&rdquo;
                </blockquote>
                <p className="attr">Penulis, kerja fully remote dari Bandung</p>
              </div>
              <div className="fact-list reveal">
                <div className="fact">
                  <span className="f-mark">01</span>
                  <p>
                    <strong>Anak IPS waktu SMA.</strong> Salah satu dari yang katanya bukan
                    &ldquo;anak matematika.&rdquo;
                  </p>
                </div>
                <div className="fact">
                  <span className="f-mark">02</span>
                  <p>
                    <strong>Kuliah Manajemen, usaha bangkrut.</strong> Tabungan ikut habis
                    bersamanya.
                  </p>
                </div>
                <div className="fact">
                  <span className="f-mark">03</span>
                  <p>
                    <strong>Belajar semuanya otodidak.</strong> Dari YouTube, dokumentasi, dan
                    trial and error. Tanpa bootcamp, tanpa mentor.
                  </p>
                </div>
                <div className="fact">
                  <span className="f-mark">04</span>
                  <p>
                    <strong>Tetap dapet kerja, kurang dari setahun.</strong> Full-time, fully
                    remote, digaji dollar. Ebook ini ngilangin alasan terakhirmu: nggak tau harus
                    mulai dari mana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* READ CHAPTER 1 FREE */}
        <section aria-labelledby="ch1-h">
          <div className="wrap">
            <div className="ch1-card reveal">
              <h2 id="ch1-h">Baca Bab 1 gratis, langsung di sini</h2>
              <p className="ch1-sub">Tanpa email, tanpa download. Tinggal baca.</p>
              <button
                className="btn-ghost"
                type="button"
                ref={ch1BtnRef}
                aria-expanded={ch1Open}
                aria-controls="ch1Body"
                onClick={toggleCh1}
              >
                {ch1Open ? "Tutup bab ini" : "Baca bab lengkapnya"}
              </button>
              <div className={`ch1-body${ch1Open ? " open" : ""}`} id="ch1Body">
                <div className="chapter">
                  <span className="ch-no">Bab 1</span>
                  <h3>Kenapa Kamu Harus Baca Ebook Ini</h3>
                  <p className="ch-lede">
                    Dari anak IPS yang nggak ngerti tech, sampe kerja remote digaji dollar.
                  </p>
                  <hr />
                  <p>Saya mau jujur sama kamu dari awal.</p>
                  <p>
                    Saya bukan anak IT. Bukan lulusan teknik informatika. Bukan orang yang dari
                    kecil udah coding. Saya anak IPS. Kuliah di jurusan Manajemen. Dan sebelum
                    tahun 2022, kalau kamu tanya saya apa itu API, saya nggak akan bisa jawab.
                  </p>
                  <p>
                    Tapi sekarang, saya kerja remote dari Bandung sebagai AI Automation Engineer
                    buat perusahaan di New Zealand. Gaji dalam dollar. Nggak perlu pindah, nggak
                    perlu visa, nggak perlu ijazah IT. Cuma laptop, internet, dan skill yang saya
                    pelajari sendiri.
                  </p>
                  <p>Gimana bisa? Itu yang mau saya ceritain di bab ini.</p>
                  <h4>Cerita yang Nggak Glamor</h4>
                  <p>
                    Saya lulus SMA dari jurusan IPS tahun 2015. Lanjut kuliah di jurusan
                    Manajemen Aset. Setelah lulus tahun 2019, saya kerja jadi accounting asset.
                    Sesuai jurusan, sesuai ekspektasi. Gaji UMR, kerja kantoran 8-5. Nggak ada
                    yang salah.
                  </p>
                  <p>
                    Tapi di tahun 2020, COVID-19 datang. Kantor tempat saya kerja terdampak
                    berat. Kondisi makin nggak menentu, dan akhirnya saya memutuskan resign.
                    Waktu itu saya mikir, &ldquo;Daripada nunggu di-PHK, mending saya coba jalan
                    sendiri.&rdquo;
                  </p>
                  <p>
                    Dengan tabungan yang ada, saya coba buka usaha. Dua tahun saya habiskan buat
                    menjalankan usaha itu. Dua tahun penuh perjuangan, trial and error, dan
                    harapan yang pelan-pelan menipis. Sampai akhirnya, usahanya nggak jalan.
                    Tabungan habis. Saya bangkrut.
                  </p>
                  <p>
                    Itu titik terendah saya. Nggak punya kerjaan, nggak punya tabungan, nggak
                    punya arah. Di usia yang harusnya udah mapan, saya ngerasa mulai dari nol
                    lagi.
                  </p>
                  <p>
                    Tapi justru di titik terendah itu, saya bikin keputusan yang mengubah hidup
                    saya.
                  </p>
                  <p>
                    Di awal 2022, saya mulai belajar coding dari YouTube. Nol besar. Nggak punya
                    background IT, nggak punya temen yang bisa ditanya, nggak punya modal buat
                    ikut bootcamp. Cuma saya, laptop, dan internet. Tapi saya punya satu hal:
                    nggak ada lagi yang bisa saya lose. Jadi saya all in.
                  </p>
                  <p>
                    Saya konsisten. Setiap hari belajar, setiap hari praktek. Dan di September
                    2022, kurang dari 9 bulan setelah mulai belajar coding, saya dapet kerjaan
                    sebagai Frontend Engineer. Kerja kantoran, berangkat pagi pulang sore. Tiga
                    tahun saya jalani itu.
                  </p>
                  <p>
                    Selama tiga tahun jadi Frontend Engineer, saya lihat satu hal yang terus
                    berulang: banyak proses di perusahaan yang masih manual dan bisa diotomasi.
                    Copy-paste data, kirim email satu-satu, bikin report manual. Saya mulai
                    penasaran: gimana caranya automasi semua itu? Dan di situlah saya ketemu AI
                    Automation.
                  </p>
                  <p>
                    Di Desember 2024, saya mulai belajar AI Automation. Kenal tools yang namanya
                    n8n. Ini platform automation yang bisa nyambungin berbagai aplikasi dan bikin
                    proses otomatis pakai AI. Waktu itu saya nggak ngerti sama sekali. Tapi saya
                    penasaran. Saya mulai belajar dari dokumentasi, dari trial and error, dari
                    eksperimen setiap malam setelah pulang kerja.
                  </p>
                  <p>
                    Saya mulai bikin mini project. Automasi kecil-kecilan. Posting di LinkedIn.
                    Dapet beberapa freelance. Tapi waktu saya coba cari kerjaan full-time remote
                    di bidang AI Automation? Susah. Banget.
                  </p>
                  <p>
                    Ini titik terendah kedua. Pagi sampe siang kerja kantoran full-time sebagai
                    Frontend Engineer. Sore sampe malam belajar automation dan ngerjain
                    freelance. Kirim lamaran ke puluhan perusahaan luar negeri. Gagal di final
                    interview. Berkali-kali. Hampir nyerah.
                  </p>
                  <p>
                    Tapi saya nggak berhenti. Terus belajar, terus bikin project, terus apply.
                    Dan di November 2025, akhirnya saya dapet tawaran kerja remote dari
                    perusahaan di New Zealand. Sebagai AI Automation Engineer. Gaji dalam dollar.
                  </p>
                  <p>
                    Dari mulai belajar AI Automation sampe dapet kerja remote, prosesnya kurang
                    dari 1 tahun.
                  </p>
                  <p>
                    Coba baca ulang perjalanan itu: anak IPS, lulusan Manajemen Aset, pernah
                    bangkrut, belajar coding dari nol, kerja kantoran 3 tahun, belajar AI
                    Automation sambil kerja, gagal interview berkali-kali, dan akhirnya kerja
                    remote digaji dollar. Kalau saya bisa, kamu juga bisa.
                  </p>
                  <blockquote>
                    &ldquo;Kalau kamu konsisten belajar 2-3 jam sehari, dalam 6 bulan kamu bisa
                    punya skill yang perusahaan luar negeri mau bayar mahal.&rdquo;
                  </blockquote>
                  <h4>Kenapa AI Automation?</h4>
                  <p>
                    Kamu mungkin pernah denger soal AI, soal ChatGPT, soal automation. Tapi buat
                    banyak orang, itu semua masih terasa jauh. Kayak bukan dunia mereka. Kayak
                    cuma buat orang IT.
                  </p>
                  <p>
                    Kenyataannya, AI Automation itu salah satu skill yang paling dicari di dunia
                    kerja sekarang. Dan yang bikin menarik: kamu nggak perlu jadi programmer buat
                    bisa ngelakuin ini.
                  </p>
                  <p>
                    <strong>Ini yang bikin AI Automation spesial:</strong>
                  </p>
                  <p>
                    <strong>1. Demand tinggi, supply rendah.</strong> Banyak perusahaan butuh
                    orang yang bisa automasi proses bisnis mereka pakai AI. Tapi orangnya masih
                    sedikit. Ini artinya peluangnya besar banget.
                  </p>
                  <p>
                    <strong>2. Nggak perlu background IT.</strong> Saya buktinya. Tools kayak n8n
                    itu visual, drag and drop. Kamu nggak perlu nulis ratusan baris kode. Yang
                    kamu butuh itu logika dan pemahaman tentang proses bisnis. Dan kalau kamu
                    pernah kerja di mana aja, kamu udah punya itu.
                  </p>
                  <p>
                    <strong>3. Bisa kerja remote.</strong> Karena semua kerjaan dilakuin di
                    cloud, kamu bisa kerja dari mana aja. Dari kamar, dari kafe, dari mana pun
                    yang ada internet. Dan perusahaan luar negeri udah terbiasa hire remote
                    workers.
                  </p>
                  <p>
                    <strong>4. Gaji dalam dollar.</strong> Ini bagian yang paling menarik. Kalau
                    kamu kerja buat perusahaan luar negeri, gaji kamu dalam dollar atau currency
                    asing lainnya. Dengan kurs sekarang yang terus naik, gaji yang sama nilainya
                    terus bertambah dalam rupiah.
                  </p>
                  <h4>Buat Siapa Ebook Ini?</h4>
                  <p>Ebook ini saya tulis buat kamu yang:</p>
                  <p>
                    <strong>Nggak punya background IT</strong> tapi pengen masuk ke dunia tech.
                    Mungkin kamu accounting kayak saya dulu, atau admin, marketing, HRD, guru,
                    atau bahkan fresh graduate yang belum tau mau kerja apa. Kamu nggak perlu
                    gelar informatika. Kalau saya yang anak Manajemen bisa, kamu juga bisa.
                  </p>
                  <p>
                    <strong>Pengen kerja remote</strong> tapi bingung mulai dari mana. Kamu lihat
                    orang lain kerja dari rumah digaji dollar dan bertanya-tanya &ldquo;gimana
                    caranya?&rdquo; Ebook ini kasih kamu roadmap yang jelas, dari nol sampe punya
                    skill yang bisa dijual ke perusahaan luar negeri.
                  </p>
                  <p>
                    <strong>Udah nonton video saya di YouTube</strong> tapi pengen versi yang
                    lebih terstruktur. Di YouTube, materi tersebar di banyak video. Di ebook ini,
                    semuanya disusun rapi jadi satu alur yang bisa kamu ikutin step by step dan
                    baca ulang kapan aja.
                  </p>
                  <p>
                    <strong>Mau naikin value diri</strong> di dunia kerja. Mungkin kamu udah
                    kerja tapi ngerasa stuck, gaji segitu-segitu aja, dan pengen punya skill
                    tambahan yang bikin kamu stand out di mata recruiter. AI Automation itu
                    skill-nya.
                  </p>
                  <h4>Apa yang Bakal Kamu Dapetin?</h4>
                  <p>
                    Di ebook ini, kamu bakal mulai dari paham konsep dasar AI dan Automation
                    dalam bahasa yang simpel. Lalu kamu siapin fondasi yang dibutuhin (nggak
                    banyak, tenang). Setelah itu kamu langsung praktek: bikin workflow pertama di
                    n8n, connect ke Google Sheets, tambahin AI yang bisa analisis data otomatis,
                    sampe akhirnya bikin satu mini project lengkap yang siap dipakein di dunia
                    nyata. Di bab terakhir, kamu dapet roadmap buat cari kerja remote dan
                    monetisasi skill ini. Plus bonus cheat sheet dan template prompt AI yang bisa
                    langsung kamu pakai.
                  </p>
                  <h4>Kenapa Ebook, Bukan Cuma YouTube?</h4>
                  <p>
                    Pertanyaan yang wajar. Saya udah share banyak konten gratis di YouTube. Jadi
                    kenapa kamu harus baca ebook ini?
                  </p>
                  <p>
                    <strong>Terstruktur dari A sampe Z.</strong> Di YouTube, kamu harus cari
                    sendiri video mana yang harus ditonton duluan. Di ebook ini, semuanya udah
                    disusun dalam urutan yang benar. Kamu tinggal ikutin dari Bab 1 sampe Bab 8.
                  </p>
                  <p>
                    <strong>Bisa dibaca ulang kapan aja.</strong> Waktu kamu praktek dan lupa
                    caranya, kamu tinggal buka halaman yang relevan. Nggak perlu scrub video
                    maju-mundur nyari bagian yang kamu butuhin.
                  </p>
                  <p>
                    <strong>Ada yang nggak ada di YouTube.</strong> Template prompt AI, cheat
                    sheet expression n8n, dan checklist kesiapan di bonus chapter itu eksklusif
                    buat ebook ini.
                  </p>
                  <p>
                    <strong>Lebih dalam dan detail.</strong> Di video, saya harus keep it short
                    biar penonton nggak bosen. Di ebook, saya bisa jelasin lebih detail, kasih
                    lebih banyak contoh, dan nggak perlu rushing.
                  </p>
                  <h4>Satu Hal yang Saya Mau Kamu Percaya</h4>
                  <p>Sebelum kamu lanjut ke bab berikutnya, saya mau kamu pegang satu hal ini:</p>
                  <blockquote>
                    &ldquo;Kamu nggak perlu jadi jenius. Kamu nggak perlu punya background IT.
                    Kamu cuma perlu konsisten, mau belajar, dan nggak nyerah waktu stuck.
                    Sisanya, biar ebook ini yang guide.&rdquo;
                  </blockquote>
                  <p>
                    Saya udah lewatin semua fase itu. Bingung, stuck, gagal interview, ngerasa
                    nggak cukup pinter. Tapi saya tetep jalan. Dan sekarang saya di posisi yang
                    dulu saya kira nggak mungkin buat orang kayak saya.
                  </p>
                  <p>Kalau saya bisa, kamu juga bisa. Serius.</p>
                  <hr />
                  <p>
                    Oke, cukup curhatnya. Di bab berikutnya, kita masuk ke materi. Saya bakal
                    jelasin apa itu AI dan Automation dalam bahasa yang kamu pasti ngerti.
                  </p>
                </div>
                <div className="ch1-close">
                  <h3>Itu baru Bab 1 dari 8. Prakteknya mulai di Bab 4.</h3>
                  <ul className="ch1-toc">
                    <li>Bab 2 Konsep Dasar</li>
                    <li>Bab 3 Persiapan</li>
                    <li>Bab 4 Kenalan sama n8n</li>
                    <li>Bab 5 Workflow Pertama</li>
                    <li>Bab 6 Tambahin AI</li>
                    <li>Bab 7 Mini Project</li>
                    <li>Bab 8 Roadmap Karier</li>
                    <li>Bonus: template &amp; cheat sheet</li>
                  </ul>
                  <a className="btn" href="#" role="button">
                    Lanjut baca (<span>IDR 79K</span>)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL BUILD */}
        <section aria-labelledby="build-h">
          <div className="wrap">
            <span className="kicker">Bukan ebook buat dibaca doang. Ebook buat praktek.</span>
            <h2 id="build-h">Apa yang bakal kamu bangun</h2>
            <p className="lede">
              Sampai project terakhir, semua ini bakal kamu bikin dengan tanganmu sendiri:
            </p>
            <div className="build-grid">
              <div className="b-card reveal">
                <span className="num">BUILD 1</span>
                <h3>Form web live</h3>
                <p>Bisa dipake siapa aja di internet. Tanpa nulis kode sama sekali.</p>
              </div>
              <div className="b-card reveal">
                <span className="num">BUILD 2</span>
                <h3>AI yang baca setiap submission</h3>
                <p>Menilai sentimen dan topik tiap pesan secara otomatis.</p>
              </div>
              <div className="b-card reveal">
                <span className="num">BUILD 3</span>
                <h3>Sistem kondisional</h3>
                <p>Logika yang nentuin kapan sebuah situasi butuh manusia.</p>
              </div>
              <div className="b-card reveal">
                <span className="num">BUILD 4</span>
                <h3>Alert email otomatis</h3>
                <p>Langsung terkirim begitu ada feedback negatif masuk.</p>
              </div>
              <div className="b-card reveal">
                <span className="num">BUILD 5</span>
                <h3>Database terstruktur</h3>
                <p>Nyimpen semuanya: rapi, terstruktur, dan ber-timestamp.</p>
              </div>
            </div>
            <p className="build-payoff reveal">
              <strong>Terus ebook ini bantu kamu jadiin bukti.</strong> Halaman-halaman terakhir
              nunjukin persis cara packaging project ini jadi portofolio pertamamu: screenshot,
              studi kasus 3 kalimat, dan post LinkedIn.
            </p>
          </div>
        </section>

        {/* CHAPTERS */}
        <section aria-labelledby="toc-h" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <span className="kicker">67 halaman · 25+ screenshot asli</span>
            <h2 id="toc-h">Apa isinya</h2>
            <div className="toc">
              <div className="ch reveal">
                <span className="c-no">BAB 1–2</span>
                <div className="c-body">
                  <h3>Cerita &amp; konsep dasarnya</h3>
                  <p>Perjalanan saya, dan apa itu AI Automation sebenarnya, dalam bahasa simpel.</p>
                </div>
              </div>
              <div className="ch reveal">
                <span className="c-no">BAB 3</span>
                <div className="c-body">
                  <h3>Satu-satunya persiapan yang kamu butuhin</h3>
                  <p>
                    Semuanya gratis. Plus rutinitas &ldquo;biar nggak stuck&rdquo; yang misahin
                    orang yang berhasil belajar tech dari yang nyerah.
                  </p>
                </div>
              </div>
              <div className="ch reveal">
                <span className="c-no">BAB 4</span>
                <div className="c-body">
                  <h3>n8n dari nol banget</h3>
                  <p>Bikin akun, kenalan sama interface-nya, dan workflow pertamamu yang jalan.</p>
                </div>
              </div>
              <div className="ch reveal">
                <span className="c-no">BAB 5</span>
                <div className="c-body">
                  <h3>Automation pertamamu yang berguna</h3>
                  <p>Form live yang nyambung ke Google Sheets, kepake beneran dari hari pertama.</p>
                </div>
              </div>
              <div className="ch reveal">
                <span className="c-no">BAB 6</span>
                <div className="c-body">
                  <h3>Nambahin otak AI-nya</h3>
                  <p>API key, prompt engineering, dan analisis sentimen otomatis.</p>
                </div>
              </div>
              <div className="ch reveal">
                <span className="c-no">BAB 7</span>
                <div className="c-body">
                  <h3>Mini project lengkap</h3>
                  <p>
                    Analisis AI, logika kondisional, alert email, dan database. Semuanya nyambung
                    jadi satu.
                  </p>
                </div>
              </div>
              <div className="ch reveal">
                <span className="c-no">BAB 8</span>
                <div className="c-body">
                  <h3>Roadmap-nya</h3>
                  <p>Cara dapet kerja, gambaran rate pasar yang jujur, dan 30 hari pertamamu.</p>
                </div>
              </div>
              <div className="ch bonus reveal">
                <span className="c-no">BONUS</span>
                <div className="c-body">
                  <h3>Toolkit yang bakal kamu pake bertahun-tahun</h3>
                  <p>
                    Cheat sheet node &amp; expression, 15 template prompt AI siap pakai, dan
                    checklist kesiapan ke level Intermediate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HONESTY */}
        <section className="honest" aria-labelledby="honest-h">
          <div className="wrap honest-inner">
            <span className="kicker">Baca ini sebelum kamu beli</span>
            <h2 id="honest-h">
              Yang ebook ini <u>nggak</u> akan janjiin
            </h2>
            <p>
              Kamu pasti pernah lihat iklannya. <strong>&ldquo;Cuan ratusan juta dalam 90 hari
              pake AI.&rdquo;</strong> Orang bergaya di depan Lamborghini sewaan.
            </p>
            <p>
              Ebook ini nggak janjiin penghasilan apa pun, karena siapa pun yang janjiin nominal
              tertentu dalam waktu tertentu itu lagi jualan fantasi.
            </p>
            <p>
              <strong>Yang saya janjiin:</strong> skill teknis yang beneran dicari pasar, diajarin
              dalam urutan persis yang dulu saya harap ada yang ngajarin ke saya, oleh orang yang
              emang kerja di bidang ini sehari-hari. Hasilnya tergantung apa yang kamu lakuin sama
              skill itu.
            </p>
            <div className="rate-line reveal">
              <strong>Sekadar konteks, bukan janji:</strong> freelancer AI automation di Upwork
              rata-rata dibayar <span className="mono">$85–120/jam</span> di awal 2026, dan satu
              project workflow biasanya laku <span className="mono">$200–1,500</span>. Demand-nya
              nyata. Kerjaannya nyata. Sisanya tergantung kamu.
            </div>
          </div>
        </section>

        {/* FIT */}
        <section aria-labelledby="fit-h">
          <div className="wrap">
            <span className="kicker">Cek kecocokan, jujur-jujuran</span>
            <h2 id="fit-h">Ebook ini buat kamu?</h2>
            <div className="fit-grid">
              <div className="fit yes reveal">
                <h3>
                  <span className="mk" aria-hidden="true">
                    ✓
                  </span>{" "}
                  Cocok buat kamu kalau…
                </h3>
                <ul>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      Kamu kerja di admin, accounting, sales, HR, guru, retail, atau bidang
                      non-teknis lainnya, dan pengen masuk dunia tech tanpa gelar IT atau bootcamp
                      puluhan juta.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>Kamu udah nonton ratusan tutorial AI tapi belum bikin apa-apa.</span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      Kamu udah kerja tapi ngerasa stuck, dan pengen skill yang bikin kamu stand
                      out atau jadi jalan keluar.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="fit no reveal">
                <h3>
                  <span className="mk" aria-hidden="true">
                    ✗
                  </span>{" "}
                  <em>Bukan</em> buat kamu kalau…
                </h3>
                <ul>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✗
                    </span>
                    <span>
                      Kamu developer berpengalaman. Pace-nya bakal kerasa lambat, tunggu level
                      Intermediate aja.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✗
                    </span>
                    <span>Kamu nyari passive income tanpa usaha.</span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✗
                    </span>
                    <span>Kamu nggak mau nyisihin 2–3 jam fokus per hari.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section aria-labelledby="offer-h" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <span className="kicker">Semua yang kamu dapet</span>
            <h2 id="offer-h">Satu harga. Satu toolkit lengkap.</h2>
            <div className="offer-card reveal">
              <div className="offer-left">
                <h3 style={{ fontSize: 18 }}>AI Automation Dari Nol (Level Basic)</h3>
                <ul>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>PDF lengkap 67 halaman</strong>, bisa dibaca di semua device.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>BONUS: 3 file workflow n8n siap import</strong>, sistem persis dari
                      Bab 5–7, jadi kamu bisa bedah atau langsung pake hasil jadinya.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>25+ screenshot asli</strong> dari build beneran, bukan mockup.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>15 template prompt AI tinggal copy-paste</strong> buat use case
                      bisnis.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>Cheat sheet node &amp; expression</strong> yang bakal kamu pake
                      bertahun-tahun.
                    </span>
                  </li>
                  <li>
                    <span className="mk" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong>Checklist kesiapan</strong> ke level Intermediate.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="offer-right">
                <Image
                  src={COVER}
                  width={1024}
                  height={1024}
                  sizes="150px"
                  alt=""
                  aria-hidden="true"
                />
                <div className="offer-price">IDR 79K</div>
                <div className="offer-sub">sekali bayar · langsung download</div>
                <a className="btn" href="#" role="button">
                  Saya mau ini{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div style={{ textAlign: "center" }}>
              <span className="kicker">Pertanyaan</span>
              <h2 id="faq-h">Sebelum kamu nanya</h2>
            </div>
            <div className="faq">
              <details className="reveal">
                <summary>Perlu background coding nggak?</summary>
                <div className="a">
                  Nggak. Ebook ini nganggep kamu mulai dari nol banget. Sebelum 2022, penulisnya
                  aja nggak bisa jawab apa itu API. Project pertamanya form web live tanpa nulis
                  kode sama sekali, dan tiap langkah ditunjukin pake screenshot asli.
                </div>
              </details>
              <details className="reveal">
                <summary>Butuh tools apa aja? Bayar nggak?</summary>
                <div className="a">
                  Bab 3 bahas satu-satunya persiapan yang kamu butuhin, semuanya gratis. Lanjut
                  di Bab 4, kamu dituntun bikin akun n8n dan kenalan sama interface-nya dari nol.
                </div>
              </details>
              <details className="reveal">
                <summary>Kalau saya stuck gimana?</summary>
                <div className="a">
                  Bab 3 ngajarin rutinitas &ldquo;biar nggak stuck&rdquo;, kebiasaan yang misahin
                  orang yang berhasil belajar tech dari yang nyerah. Plus, 3 file workflow bonus
                  itu sistem jadi persis dari Bab 5–7, jadi kamu selalu bisa import build yang
                  udah jalan dan bandingin sama punyamu.
                </div>
              </details>
              <details className="reveal">
                <summary>Butuh waktu berapa lama?</summary>
                <div className="a">
                  Siapin 2–3 jam fokus per hari. Kalau nggak bisa, jujur aja ebook ini bukan buat
                  kamu. Ini ebook buat dipraktekin, bukan cuma di-skim.
                </div>
              </details>
              <details className="reveal">
                <summary>Saya developer berpengalaman. Perlu beli?</summary>
                <div className="a">
                  Mungkin belum. Pace-nya bakal kerasa lambat buat kamu. Ini Level Basic, ditulis
                  buat career switcher yang mulai dari nol. Tunggu level Intermediate.
                </div>
              </details>
              <details className="reveal">
                <summary>Ebook ini bikin saya cuan nggak?</summary>
                <div className="a">
                  Nggak ada janji. Siapa pun yang janjiin nominal tertentu dalam waktu tertentu
                  itu lagi jualan fantasi. Yang diajarin di sini skill teknis yang beneran dicari
                  pasar. Sekadar konteks: freelancer AI automation di Upwork rata-rata dibayar
                  $85–120/jam di awal 2026. Hasilnya tergantung apa yang kamu lakuin sama
                  skill-nya.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final" aria-labelledby="final-h" style={{ paddingTop: 8 }}>
          <div className="wrap">
            <span className="kicker">AI Automation Dari Nol · Level Basic</span>
            <h2 id="final-h">Jalurnya ada dan udah ditulisin buat kamu.</h2>
            <p className="lede">
              Berhenti nonton tutorial doang. Mulai dari Bab 1, dan di project terakhir kamu udah
              punya sistem AI yang jalan, sekaligus portofolio pertamamu yang dibangun pake tanganmu
              sendiri.
            </p>
            <a className="btn" href="#" role="button">
              Ambil ebook <span>IDR 79K</span>{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
            <p className="under-btn">
              Langsung download PDF · 67 halaman · bonus 3 file workflow n8n
            </p>

            <div className="disclaimer">
              <strong>Disclaimer Penghasilan:</strong> Ebook ini ngajarin skill teknis. Semua
              angka penghasilan yang disebut adalah rate pasar yang tersedia publik dan
              dicantumin sebagai konteks aja, bukan janji atau jaminan hasil. Hasilmu tergantung
              usaha, pengalaman, dan kondisi pasar. Kebanyakan orang yang beli produk edukasi
              nggak menyelesaikan atau mempraktekkannya.
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© 2026 · AI Automation Dari Nol</span>
          <span className="mono">Dibikin sama career switcher, buat career switcher.</span>
        </div>
      </footer>

      {/* mobile sticky buy bar */}
      <div className={`sticky-cta${stickyShow ? " show" : ""}`}>
        <a className="btn" href="#" role="button">
          Ambil ebook <span>IDR 79K</span>
        </a>
      </div>
    </div>
  );
}
