import React from 'react'

export default function PBPBanner() {
    return (
        <div className="bg-gradient-to-r from-primary to-primary-800 rounded-3xl p-12 text-center">
            <h3 className="text-6xl font-extrabold bg-gradient-to-bl from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
                PBP
            </h3>
            <h3 className="text-3xl font-bold text-white/90 mb-4 uppercase">
                Mission d'Appui à la Mobilisation des Ressources Internes
            </h3>
            <p className="text-white mb-8 max-w-2xl mx-auto text-xl animate-pulse">
                Construire une Guinée plus forte par la Mobilisation des Ressources Internes
            </p>
        </div>
    )
}
