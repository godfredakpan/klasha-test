import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import Image from '../elements/Image'
import { Button } from '@windmill/react-ui'
import { AddIcon } from '../../icons'

function ContactCard({ title, value, image, button }) {
  return (
      <div className="col-xl-4 col-lg-12 col-md-12">
        <Card>
          <table className="table card-table mt-2">
            <tbody>
              <tr>
                <td className="width45">
                  <span className="avatar avatar-green">
                    <i className="fa fa-check" />
                  </span>
                </td>
                <td>
                  <p className="mb-0">Payment from #1598</p>
                  <span className="text-muted font-13">Feb 21, 2019, 3:30pm</span>
                </td>
                <td className="text-right">
                  <p className="mb-0">$300</p>
                  <span className="text-success font-13">Done</span>
                </td>
              </tr>
              <tr>
                <td className="width45">
                  <span className="avatar avatar-green">
                    <i className="fa fa-truck" />
                  </span>
                </td>
                <td>
                  <p className="mb-0">Process delivery to #85236</p>
                  <span className="text-muted font-13">March 14, 2019, 2:30pm</span>
                </td>
                <td className="text-right">
                  <p className="mb-0">$300</p>
                  <span className="text-success font-13">For pickup</span>
                </td>
              </tr>
              <tr>
                <td className="width45">
                  <span className="avatar avatar-orange">
                    <i className="fa fa-angle-left" />
                  </span>
                </td>
                <td>
                  <p className="mb-0">Process refund #4568</p>
                  <span className="text-muted font-13">March 18, 2019, 6:30pm</span>
                </td>
                <td className="text-right">
                  <p className="mb-0">$300</p>
                  <span className="text-success font-13">Done</span>
                </td>
              </tr>
              <tr>
                <td className="width45">
                  <span className="avatar avatar-red">
                    <i className="fa fa-cc-visa" />
                  </span>
                </td>
                <td>
                  <p className="mb-0">Payment failed from #32658</p>
                  <span className="text-muted font-13">April 27, 2019, 3:48pm</span>
                </td>
                <td className="text-right">
                  <p className="mb-0">$300</p>
                  <span className="text-danger font-13">Declined</span>
                </td>
              </tr>
              <tr>
                <td className="width45">
                  <span className="avatar avatar-orange">
                    <i className="fa fa-angle-left" />
                  </span>
                </td>
                <td>
                  <p className="mb-0">Process refund #4568</p>
                  <span className="text-muted font-13">March 18, 2019, 6:30pm</span>
                </td>
                <td className="text-right">
                  <p className="mb-0">$300</p>
                  <span className="text-success font-13">Done</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
  )
}

export default ContactCard
