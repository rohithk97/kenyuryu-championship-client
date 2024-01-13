import React, { useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useReactToPrint } from 'react-to-print';
import './PrintableComponent.css';

interface YourComponentProps {
  size: any | string | undefined; // Adjust the type for size
  handleOpen: (arg: any) => void; // Adjust the type for handleOpen if needed
}

const InvoiceModal: React.FC<YourComponentProps> = ({ size, handleOpen }) => {
  const componentPDf = useRef<HTMLDivElement | null>(null);
  const containerStyle = {
    backgroundImage:
      'url(/static/images/new_logo_karate___2_-removebg-preview.png)',
    backgroundSize: 'contain', // Adjust this based on your preference
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const generatePDF = useReactToPrint({
    content: () => componentPDf.current,
    documentTitle: 'INVOICE',
    onAfterPrint: () => alert('success'),
  });
  return (
    <>
      <Dialog
        open={['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(size as string)}
        size={size || 'lg'}
        handler={handleOpen}
        className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      >
        <DialogHeader className="text-black dark:text-white">
          Invoice
        </DialogHeader>
        <DialogBody>
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-boxdark dark:bg-boxdark">
            <div ref={componentPDf} className="printable-content-invoice">
              <div
                style={containerStyle}
                className="  container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4"
              >
                <div className="bg-boxdark   backdrop-blur-md bg-opacity-90 border border-opacity-10  shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 border-strokedark">
                  <div className="text-center flex p-5 bg-gradient-to-r from-red-500 to-black text-white text-2xl font-bold uppercase">
                    <p>Kenyuryu INDO-Srilanka Karate Championship 2024</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
                    <div className="flex items-center"></div>
                  </div>
                  {/* Invoice Content */}
                  <div className="flex flex-col sm:flex-row  justify-between items-start mb-4 sm:mb-6">
                    {/* From */}
                    <div className="text-sm text-white mb-4 sm:mb-0">
                      <div className="font-bold">From:</div>
                      <div>ORGANISING COMMITE </div>
                      <div>KENYU RYU INDIA </div>
                    </div>
                    {/* To */}
                    <div className="text-sm text-white">
                      <div className="font-bold">To:</div>
                      <div>JANE SMITH</div>
                      <div>KENYU RYU CALICUT </div>
                    </div>
                  </div>
                  {/* Table */}
                  <table className="w-full table-auto  mb-4 sm:mb-6">
                    {/* Table Head */}
                    <thead className="text-left text-sm text-white border-b">
                      <tr>
                        <th className="py-2 px-2 sm:px-4">EVENT</th>
                        <th className="py-2 px-2 sm:px-4">PLAYERS</th>
                        <th className="py-2 px-2 sm:px-4">PRICE</th>
                        <th className="py-2 px-2 sm:px-4">AMOUNT</th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody className="text-white">
                      <tr>
                        <td className="py-2 px-2 sm:px-4">KATA ONLY</td>
                        <td className="py-2 px-2 sm:px-4">5</td>
                        <td className="py-2 px-2 sm:px-4">1000.00</td>
                        <td className="py-2 px-2 sm:px-4">5000.00</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2 sm:px-4">KUMITE ONLY</td>
                        <td className="py-2 px-2 sm:px-4">1</td>
                        <td className="py-2 px-2 sm:px-4">1000.00</td>
                        <td className="py-2 px-2 sm:px-4">1000.00</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2 sm:px-4">KATA AND KUMITE</td>
                        <td className="py-2 px-2 sm:px-4">1</td>
                        <td className="py-2 px-2 sm:px-4">1500.00</td>
                        <td className="py-2 px-2 sm:px-4">1500.00</td>
                      </tr>
                    </tbody>
                    {/* Table Foot */}
                    <tfoot className="text-right text-sm text-white border-t">
                      <tr className="font-bold text-base">
                        <td className="py-2  px-2 sm:px-4" colSpan={3}>
                          Total
                        </td>
                        <td className="py-2 px-2 sm:px-4">7500.00</td>
                      </tr>
                    </tfoot>
                  </table>
                  {/* End of Invoice Content */}
                  <div className="text-center text-sm text-white mb-4 sm:mb-6">
                    {/* Footer */}
                    <p>Wish You A Successfull Championship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => generatePDF()}
          >
            <span>Print</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default InvoiceModal;