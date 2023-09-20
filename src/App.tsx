import './App.css'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

function App() {

  return (

    <main className='w-full h-screen flex items-center justify-center'>
      <Tabs defaultValue="account" className="w-[400px] p-4 rounded-[6px] bg-muted flex flex-col items-center">
        <TabsList>
          <TabsTrigger className='rounded-l' value="account">Account</TabsTrigger>
          <TabsTrigger className='rounded-r' value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent className='flex items-start flex-col bg-background w-full h-full p-4 rounded-[6px] gap-4' value="account">

          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>Account</h1>
            <p className='text-slate-400 poppins text-sm'>Make changes to your account here. Click save when you're done.</p>
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <Label htmlFor='name' className='text-sm'>Name</Label>
            <input type="text" className='w-full p-2 bg-background rounded-[6px] border-solid border-secondary border' placeholder='Luis Munhoz' name="name" id="name" />
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <Label htmlFor='username' className='text-sm'>Username</Label>
            <input type="text" className='w-full p-2 bg-background rounded-[6px] border-solid border-secondary border' placeholder='@luuis.munhoz' name="username" id="username" />
          </div>

          <Button className='bg-primary rounded-[6px] hover:bg-primary/70' variant={'secondary'}>Save changes</Button>

        </TabsContent>
        <TabsContent value="password">

        </TabsContent>
      </Tabs>
    </main>

  )
}

export default App
