import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useSubscription } from "../context/SubscriptionContext";
import { X } from "lucide-react";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSubscriptionOpen, setIsSubscriptionOpen, subscription } = useSubscription();

  const toggleSubscription = () => {
    setIsSubscriptionOpen(!isSubscriptionOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [formData, setFormData] = useState({
    service: '',
    plan: '',
    type: '',
    price: '',
    brief: '',
    numVideos: '',
    targetDates: '',
    locations: '',
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSftwbCTlvShkFALKqohGbaS3nsDPK5yjVFbA-yEbkutxRyv3A/formResponse';

    const formBody = new URLSearchParams();
    formBody.append('entry.372842005', subscription?.service || 'null');
    formBody.append('entry.1187620326', subscription?.plan || 'null');
    formBody.append('entry.951251', subscription?.type || 'null');
    formBody.append('entry.463396119', subscription?.price || 'null');
    formBody.append('entry.2092854243', formData.brief);
    formBody.append('entry.1996051036', formData.numVideos);
    formBody.append('entry.109214427', formData.targetDates);
    formBody.append('entry.252904067', formData.locations);
    formBody.append('entry.504081767', formData.firstName);
    formBody.append('entry.1773768898', formData.lastName);
    formBody.append('entry.1542305665', formData.email);
    formBody.append('entry.1501868973', formData.jobTitle);
    formBody.append('entry.871560980', formData.company);

    console.log("Form Data String:", formBody.toString());  // Check the final request body

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
      });

      if (response) {
        setSuccess('Form submitted successfully!');
        toggleSubscription()
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setError('There was an error submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative ${
        menuOpen || isSubscriptionOpen ? "overflow-hidden" : ""
      }  h-screen `}
    >
      {isSubscriptionOpen && (
        <div className="absolute z-[100] w-full h-full bg-white/60 flex items-center justify-center ">
          <div className="w-[500px] h-auto flex flex-col bg-white p-[20px] rounded-[16px] gap-y-[30px] shadow-xl">
            <div className="w-full flex justify-between items-start">
              <div>
                <h3 className="text-[14px] font-[600]">Demande de devis</h3>
                <p className="text-[12px] font-[300]">
                  {subscription?.service} {subscription?.type} - {subscription?.plan} ({subscription?.price}) 
                </p>
              </div>
              <button onClick={toggleSubscription}>
                <X width={15} />
              </button>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-[10px]">
                <div className="form-group">
                  <label className="text-[12px] font-[600]">Brief *</label>
                  <textarea
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="Quel est votre brief ?"
                    required
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Nombre de vidéo(s)</label>
                  <input
                    name="numVideos"
                    value={formData.numVideos}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Date(s) ciblée(s)</label>
                  <input
                    name="targetDates"
                    value={formData.targetDates}
                    onChange={handleChange}
                    placeholder="Date(s) ou période souhaitée(s)"
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Lieu(x) de tournage</label>
                  <input
                    name="locations"
                    value={formData.locations}
                    onChange={handleChange}
                    placeholder="Ville(s) ou pays souhaité(s)"
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Prénom *</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom"
                    required
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Nom *</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom"
                    required
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Email address *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Fonction *</label>
                  <input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Fonction"
                    required
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <div className="form-group">
                  <label className="text-[12px] font-[600]">Société *</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Société"
                    required
                    className="w-full p-2 bg-black/5 border-none text-[14px] rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary p-2 mt-[30px] rounded-md text-white w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Envoyer"}
                </button>

                {success && <p className="text-green-500 mt-4">{success}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="fixed w-[638px] right-[200px] aspect-square bg-secondary rounded-full z-[-10] blur-[481px] opacity-10"></div>
      <div className="fixed w-[638px] top-[100px] left-[100px] aspect-square bg-primary z-[-10] rounded-full blur-[481px] opacity-10"></div>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main className={`hide-scrollbar`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
