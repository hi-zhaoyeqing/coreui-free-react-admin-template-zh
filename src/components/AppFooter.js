import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI ZH
        </a>
        <span className="ms-1">&copy; 2022 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://github.com/qdzhaoxiaodao/coreui-free-react-admin-template-zh"
          target="_blank"
          rel="noopener noreferrer"
        >
          coreui-free-react-admin-template-zh
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
