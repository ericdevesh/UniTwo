import React, { useState } from 'react';
import Room from './components/Room';
import Button from './components/Button';
import Input from './components/Input';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [view, setView] = useState<'auth' | 'room'>('auth');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setUser({
        id: Date.now().toString(),
        name: nameInput,
        isOnline: true
      });
      setView('room');
    }
  };

  if (view === 'room' && user) {
    return <Room user={user} onLeave={() => setView('auth')} />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-950">
       {/* Ambient Background */}
       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-700/20 rounded-full blur-[100px] animate-pulse"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-700/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>

       <div className="relative z-10 w-full max-w-md p-6">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 mb-4 shadow-lg shadow-violet-500/30">
                  <span className="text-2xl font-bold text-white">U2</span>
               </div>
               <h1 className="text-3xl font-bold text-white mb-2">UniTwo</h1>
               <p className="text-slate-400">Share moments, miles apart.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
               <Input 
                  label="Display Name"
                  placeholder="e.g. Alex"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
               />
               
               <Input 
                  label="Room Code"
                  placeholder="Enter code or create new"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>}
               />

               <div className="pt-2">
                 <Button type="submit" className="w-full py-4 text-lg">
                    Join Room
                 </Button>
               </div>
            </form>

            <div className="mt-6 text-center">
               <p className="text-xs text-slate-500">
                  By joining, you agree to our terms. Camera and microphone access required for full experience.
               </p>
            </div>
          </div>
       </div>
    </div>
  );
};

export default App;