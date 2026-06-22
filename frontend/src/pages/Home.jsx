import UploadForm from "../components/UploadForm";

function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <UploadForm />
      </div>
    </div>
  );
}

export default Home;