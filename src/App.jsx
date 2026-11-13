import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [mahasiswa] = useState([
    {
      nim: '2301001',
      nama: 'Andi Saputra',
      noHp: '081234567801',
      email: 'andi@mail.com',
      alamat: 'Surabaya',
      prodi: 'Informatika',
      tahunMasuk: 2023,
    },
    {
      nim: '2301002',
      nama: 'Budi Santoso',
      noHp: '081234567802',
      email: 'budi@mail.com',
      alamat: 'Malang',
      prodi: 'Sistem Informasi',
      tahunMasuk: 2023,
    },
    {
      nim: '2301003',
      nama: 'Citra Amelia',
      noHp: '081234567803',
      email: 'citra@mail.com',
      alamat: 'Lumajang',
      prodi: 'Informatika',
      tahunMasuk: 2023,
    },
    {
      nim: '2401001',
      nama: 'Dinda Putri',
      noHp: '081234567804',
      email: 'dinda@mail.com',
      alamat: 'Jember',
      prodi: 'Manajemen',
      tahunMasuk: 2024,
    },
    {
      nim: '2401002',
      nama: 'Eko Pratama',
      noHp: '081234567805',
      email: 'eko@mail.com',
      alamat: 'Kediri',
      prodi: 'Informatika',
      tahunMasuk: 2024,
    },
    {
      nim: '2401003',
      nama: 'Fajar Nugroho',
      noHp: '081234567806',
      email: 'fajar@mail.com',
      alamat: 'Sidoarjo',
      prodi: 'Sistem Informasi',
      tahunMasuk: 2024,
    },
  ]);

  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <div className="info-bar">
        <div className="info-card">
          <span className="info-label">Total Mahasiswa:</span>
          <span className="info-value">{mahasiswa.length} Mahasiswa</span>
        </div>
        <div className="info-card clock">
          <span className="info-label">Waktu Saat Ini:</span>
          <span className="info-value">{waktu.toLocaleTimeString('id-ID')} WIB</span>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr key={mhs.nim}>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.noHp}</td>
                <td>{mhs.email}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.prodi}</td>
                <td>{mhs.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;