

"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { GoogleAuthButton } from "@/components/GoogleAuthButton"
import { toast } from "sonner"
import Image from "next/image"
// import lampImg from "@/public/lamp.png"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("/api/user/login", {
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = response.data

      if (response.status !== 200) {
        throw new Error(data.error || "Login failed")
      }

      if (formData.rememberMe) {
        localStorage.setItem("Authorization", data.token)
      } else {
        sessionStorage.setItem("Authorization", data.token)
      }

      toast.success("Login successful!")
      router.push("/")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed")
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
          <Image src={"/art1.jpg"} width={100} height={100} alt="Lamp" className="w-24 h-auto mb-6" />
          <p className="text-xl font-bold text-center text-gray-800 leading-relaxed">
            “ LESS ORDINARY <br /> MORE YOU ”
          </p>
        </div>

        {/* Right Login Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            JOIN EVERWOOD
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              disabled={isLoading}
              className="bg-white border border-gray-300 text-gray-900 focus:ring-0 focus:border-black"
            />

            <div className="flex items-center justify-between text-sm flex-wrap gap-2">
              <label className="flex items-center space-x-2">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <span className="text-gray-700">Remember me</span>
              </label>

              <Link href="/forgot-password" className="text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Continue"}
            </Button>
          </form>

          <div className="my-6 text-sm text-gray-500 text-center">or continue with</div>

          <div className="mb-4">
            <GoogleAuthButton action="Log in" />
          </div>

          <p className="text-center text-xs text-gray-500">
            By proceeding I agree to T&C, Privacy Policy
          </p>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}



























// ************************************** IMPROVED BUT NOT RESPONSIVE *************************************************8
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import axios from "axios"
// import { GoogleAuthButton } from "@/components/GoogleAuthButton"
// import { toast } from "sonner"
// import Image from "next/image"
// // import lampImg from "@/public/lamp.png" // Replace with your lamp image path

// export default function LoginPage() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const response = await axios.post("/api/user/login", {
//         email: formData.email,
//         password: formData.password
//       }, {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       })

//       const data = response.data

//       if (response.status !== 200) {
//         throw new Error(data.error || "Login failed")
//       }

//       if (formData.rememberMe) {
//         localStorage.setItem("Authorization", data.token)
//       } else {
//         sessionStorage.setItem("Authorization", data.token)
//       }

//       toast.success("Login successful!")
//       router.push("/")
//     } catch (error) {
//       toast.error(error instanceof Error ? error.message : "Login failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fdf9f4] px-4">
//       <div className="max-w-5xl w-full flex bg-white rounded-2xl shadow-lg overflow-hidden">
//         {/* Left Visual Section */}
//         <div className="w-1/2 bg-[#fff6ec] flex flex-col items-center justify-center p-10">
//           {/* <Image src={lampImg} alt="Lamp" className="w-24 h-auto mb-6" /> */}
//           <Image src={"/art1.jpg"} width={100} height={100} alt="Lamp" className="w-24 h-auto mb-6" />
//           <p className="text-xl font-bold text-center text-gray-800 leading-relaxed">
//             “ LESS ORDINARY <br /> MORE YOU ”
//           </p>
//         </div>

//         {/* Right Login Section */}
//         <div className="w-1/2 p-10 flex flex-col justify-center">
//           <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
//             JOIN EVERWOOD
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 disabled={isLoading}
//                 className="bg-white border border-gray-300 text-gray-900 focus:ring-0 focus:border-black"
//               />
//             </div>

//             <div>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 disabled={isLoading}
//                 className="bg-white border border-gray-300 text-gray-900 focus:ring-0 focus:border-black"
//               />
//             </div>

//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center space-x-2">
//                 <input
//                   id="rememberMe"
//                   name="rememberMe"
//                   type="checkbox"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
//                 />
//                 <span className="text-gray-700">Remember me</span>
//               </label>

//               <Link href="/forgot-password" className="text-primary hover:underline">
//                 Forgot your password?
//               </Link>
//             </div>

//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? "Signing in..." : "Continue"}
//             </Button>
//           </form>

//           <div className="my-6 text-sm text-gray-500 text-center">or continue with</div>

//           <div className="mb-4">
//             <GoogleAuthButton action="Log in" />
//           </div>

//           <p className="text-center text-xs text-gray-500">
//             By proceeding I agree to T&C, Privacy Policy
//           </p>

//           <p className="mt-4 text-center text-sm text-gray-600">
//             Don't have an account?{" "}
//             <Link href="/signup" className="text-primary hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }














// ********************************* BASIC LANDING **************************************88
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import axios from "axios"
// import { GoogleAuthButton } from "@/components/GoogleAuthButton"
// import { toast } from "sonner"

// // export const metadata: Metadata = {
// //   title: "Login | FurniCraft",
// //   description: "Login to your FurniCraft account",
// // }

// export default function LoginPage() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const response = await axios.post("/api/user/login", {
//         email: formData.email,
//         password: formData.password
//       }, {
//         headers: {
//           "Content-Type": "application/json"
//         }
//       })

//       const data = response.data

//       console.log('DATA:', data);

//       if (response.status !== 200) {
//         throw new Error(data.error || "Login failed")
//       }

//       // Store token
//       if (formData.rememberMe) {
//         localStorage.setItem("Authorization", data.token)
//       } else {
//         sessionStorage.setItem("Authorization", data.token)
//       }

//       toast.success("Login successful!")
//       router.push("/")
//     } catch (error) {
//       toast.error(error instanceof Error ? error.message : "Login failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background">
//       <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-lg">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-primary">
//             Log in to your account
//           </h2>
//         </div>
        
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <Input
//                 id="email"
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
//                 autoComplete="current-password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 disabled={isLoading}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="rememberMe"
//                 name="rememberMe"
//                 type="checkbox"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
//               />
//               <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link 
//                 href="/forgot-password" 
//                 className="font-medium text-primary hover:text-primary-dark"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           <div>
//             <Button 
//               type="submit" 
//               className="w-full"
//               disabled={isLoading}
//             >
//               {isLoading ? "Signing in..." : "Sign in"}
//             </Button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">
//                 Or continue with
//               </span>
//             </div>
//           </div>

//           <div className="mt-6">
          
//             <GoogleAuthButton action="Log in" />

//           </div>
//         </div>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <Link href="/signup" className="font-medium text-primary hover:text-primary-dark">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }