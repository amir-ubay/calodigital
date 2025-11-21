import Image from "next/image"
export default function SocialMediaList() {
  return (
    <div id="social-media" className="flex gap-2 flex-col">
                <div id="instagram" className=" bg-white p-5 rounded-2xl shadow-md border border-gray-200">
                  <div className="flex items-center">
                    <Image src="/instagram.png" alt="Instagram Icon" width={24} height={24} className="inline-block w-6 h-6 mr-2 text-blue-900" />
                    <p className="font-semibold">Instagram</p>
                  </div>
                  <p className="pt-2">@calodigital</p>
                </div>
                <div id="website" className=" bg-white p-5 rounded-2xl shadow-md border border-gray-200">
                  <div className="flex items-center">
                    <Image src="/internet.png" alt="Website Icon" width={24} height={24} className="inline-block w-6 h-6 mr-2 text-blue-900" />
                    <p className="font-semibold">Website</p>
                  </div>
                  <p className="pt-2">www.sinarjaya.com</p>
                </div>
              </div>
  )
}