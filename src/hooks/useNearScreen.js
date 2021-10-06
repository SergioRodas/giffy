import { useState, useRef, useEffect } from 'react'

export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
   
    useEffect(function () {
        let observer

        const fromElement = externalRef ? externalRef.current : fromRef.current
        if (!fromElement) return

        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            }else {
                !once && setShow(false)
            }
        }

        // Compatibilidad: Importa intersection-observer para los navegadores que no lo soporten

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver 
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin : distance
            })
    
            observer.observe(fromElement)
        })

        

        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}