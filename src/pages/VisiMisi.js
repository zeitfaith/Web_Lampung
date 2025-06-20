import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarKanan from '../components/SidebarKanan';

const VisiMisi = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white animate-fade-in">
      <Sidebar />

      {/* Konten Tengah */}
      <main className="flex-1 px-6 py-10 overflow-x-auto ml-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg space-y-8">
            <h1 className="text-3xl font-bold text-yellow-300 mb-2 text-center">Visi & Misi</h1>

            {/* VISI */}
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">Visi</h2>
              <p className="italic text-lg text-gray-200 border-l-4 border-yellow-400 pl-4">
                “BERSAMA LAMPUNG MAJU, MENUJU INDONESIA EMAS 2045”
              </p>
            </section>

            {/* MISI */}
            <section>
              <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Misi</h2>
              <p className="text-gray-300 mb-4">
                3 MISI YANG DISEBUT DENGAN <strong>“TIGA CITA”</strong> MERUPAKAN PROGRAM KERJA GUBERNUR DAN WAKIL GUBERNUR PERIODE 2025 – 2030
              </p>

              {/* TIGA CITA 1 */}
              <div className="bg-[#374151] rounded-md p-4 mb-6 hover:shadow-xl transition duration-300 hover:scale-[1.01]">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">TIGA CITA 1</h3>
                <h4 className="text-white font-semibold mb-2">Mendorong Pertumbuhan Ekonomi yang Inklusif, Mandiri, dan Inovatif</h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1 pl-4">
                  <li>Mendorong Investasi dan Hilirisasi Industri</li>
                  <li>Lampung Menjadi Lumbung Pangan Nasional</li>
                  <li>Mewujudkan Ekosistem Ekonomi Berbasis Desa</li>
                  <li>Pariwisata dan Ekonomi Kreatif sebagai Daya Ungkit Ekonomi Daerah</li>
                  <li>Inisiasi Lumbung Energi Terbarukan</li>
                  <li>Pembangunan Aksesibilitas dan Konektivitas Infrastruktur Berkelanjutan</li>
                </ul>
              </div>

              {/* TIGA CITA 2 */}
              <div className="bg-[#374151] rounded-md p-4 mb-6 hover:shadow-xl transition duration-300 hover:scale-[1.01]">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">TIGA CITA 2</h3>
                <h4 className="text-white font-semibold mb-2">Memperkuat Sumber Daya Manusia yang Unggul dan Produktif</h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1 pl-4">
                  <li>Generasi Cerdas, Berakhlak dan Berbudaya</li>
                  <li>Pengusaha Muda Berdaya Saing dan Inovatif</li>
                  <li>Mendukung Prestasi Pemuda dan Olahraga</li>
                  <li>Menuju Zero Stunting dan Perwujudan Masyarakat Sehat</li>
                  <li>Lampung Pusat Teknologi Terpadu</li>
                </ul>
              </div>

              {/* TIGA CITA 3 */}
              <div className="bg-[#374151] rounded-md p-4 hover:shadow-xl transition duration-300 hover:scale-[1.01]">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">TIGA CITA 3</h3>
                <h4 className="text-white font-semibold mb-2">Meningkatkan Kehidupan Masyarakat Beradab, Berkeadilan, dan Berkelanjutan</h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1 pl-4">
                  <li>Membangun Semangat Lampung Bersama</li>
                  <li>Pengentasan Kemiskinan Tepat Waktu dan Tepat Sasaran</li>
                  <li>Penguatan Ketahanan Keluarga</li>
                  <li>Peningkatan Kualitas Lingkungan Hidup</li>
                  <li>Mewujudkan Birokrasi Berintegritas</li>
                  <li>Melanjutkan Pembangunan KotaBaru “Bandar Negara” berbasis Eco-City</li>
                  <li>Pemenuhan Hak dan Perlindungan Anak, Perempuan, Penyandang Disabilitas, Lansia, dan Kelompok Terlantar</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SidebarKanan />
    </div>
  );
};

export default VisiMisi;