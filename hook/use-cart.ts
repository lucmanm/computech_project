import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { TProduct } from "@/types/type"
import { toast } from '@/components/ui/use-toast'
import { Product } from '@prisma/client'


type TCartStore = {
    items: TProduct[] //use Schema from Prisma not my own schema from typescript
    additem: (data: TProduct) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

export const useCart = create(
    persist<TCartStore>((set, get) => ({
        items: [],
        additem: (data: TProduct) => {
            const currentItems = get().items
            const existingItems = currentItems.find((item) => item.id === data.id)
            
            if (existingItems) {
                return toast({
                    description: "TProduct Exist",
                    variant: 'destructive'
                })
            }
            console.log(data);
            set({ items: [...get().items, data] })
            toast({ description: "Successfully Added to cart", variant: "success" })

        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter(item => item.id !== id)] })
            toast({ description: "item Removed", variant: "success" })
        },
        removeAll: () => {
            set({ items: [] })
        },
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)