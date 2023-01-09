import create from 'zustand'

export interface UseTipCalcStore {
  bill?: number
  billError?: string
  updateBill: (value?: number) => void

  tip?: number
  tipError?: string
  updateTip: (value?: number) => void
  people?: number
  peopleError?: string
  updatePeople: (value?: number) => void
}

export const useTipCalcStore = create<UseTipCalcStore>((set) => {
  return {
    updateBill(value) {
      set({
        bill: value,
      })
    },

    updateTip(value) {
      set({
        tip: value,
      })
    },

    updatePeople(value) {
      set({
        people: value,
      })
    },
  }
})
