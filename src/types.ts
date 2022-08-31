import type { DefineComponent } from 'vue'

export interface CMDK {
  Empty: DefineComponent<{}, {}, any>
  Loading: DefineComponent<{}, {}, any>
  Separator: DefineComponent<{}, {}, any>
  Item?: DefineComponent<{}, {}, any>
  List?: DefineComponent<{}, {}, any>
  Group?: DefineComponent<{}, {}, any>
  Dialog?: DefineComponent<{}, {}, any>
  Input?: DefineComponent<{}, {}, any>
}