



"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleAuthButton } from "@/components/GoogleAuthButton"
import { toast } from "sonner"
import Image from "next/image"
// import lampImg from "@/public/lamp.png"

export default function SignUpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("/api/user/signup", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (response.status !== 200) {
        throw new Error(response.data.error || "Signup failed")
      }

      toast.success("Account created successfully!")
      router.push("/")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf9f4] px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Visual Section */}
        <div className="w-full md:w-1/2 bg-[#fff6ec] flex flex-col items-center justify-center p-10">
          {/* <Image src={lampImg} alt="Lamp" className="w-24 h-auto mb-6" /> */}
          <Image src={"/art2.jpg"} width={100} height={100} alt="Lamp" className="w-24 h-auto mb-6" />
          <p className="text-xl font-bold text-center text-gray-800 leading-relaxed">
            “ LESS ORDINARY <br /> MORE YOU ”
          </p>
        </div>

        {/* Right Signup Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            CREATE ACCOUNT
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              disabled={isLoading}
              className="bg-white border border-gray-300 text-gray-900 focus:ring-0 focus:border-black"
            />

            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              disabled={isLoading}
              className="bg-white border border-gray-300 text-gray-900 focus:ring-0 focus:border-black"
            />

            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              disabled={isLoading}
              className="bg-white border border-gray-300 text-gray-900 focus:ring-0 focus:border-black"
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Sign up"}
            </Button>
          </form>

          <div className="my-6 text-sm text-gray-500 text-center">or continue with</div>

          <div className="mb-4">
            <GoogleAuthButton action="Sign up" />
          </div>

          <p className="text-center text-xs text-gray-500">
            By proceeding I agree to T&C, Privacy Policy
          </p>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}















































// *******************************************BASIC VERSION 1 *********************************************8
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import axios from "axios"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { GoogleAuthButton } from "@/components/GoogleAuthButton"
// import { toast } from "sonner"

// export default function SignUpPage() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const response = await axios.post("/api/user/signup", formData, {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       })

//       if (response.status !== 200) {
//         throw new Error(response.data.error || "Signup failed")
//       }

//       toast.success("Account created successfully!")
//       router.push("/")
//     } catch (error) {
//       toast.error(error instanceof Error ? error.message : "Something went wrong")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background">
//       <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-lg">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-primary">
//             Create your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Full Name
//               </label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                 placeholder="Full Name"
//                 disabled={isLoading}
//               />
//             </div>
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <Input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 disabled={isLoading}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 disabled={isLoading}
//               />
//             </div>
//           </div>

//           <div>
//             <Button 
//               type="submit" 
//               className="w-full"
//               disabled={isLoading}
//             >
//               {isLoading ? "Creating account..." : "Sign up"}
//             </Button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <GoogleAuthButton action="Sign up" />
//           </div>
//         </div>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

