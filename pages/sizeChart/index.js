import Header from "../components/common/header";
import Contact from "../components/common/contact";
import Footer from "../components/common/footer";

export default function SizeChart() {
    return (
        <div className={`portslat h-screen relative pb-16 bg-white`}>
            <Contact />
            <Header />
            <div className="md:px-32 md:p-12 md:text-md text-sm">
                <div className="p-3">
                    <h1 className="font-bold text-2xl text-center my-2 mb-4 md:my-6">Size Guide</h1>
                    <div>
                        <h1 className="md:text-xl font-bold">Sizing and Fit Notes</h1>
                        <p className="md:text-lg text-sm my-2">Please use the Guide as an estimate as to what size to purchase, as styles, sizes and cuts vary between each individual item and may not be consistent with the size guide measurements.
                            If you are unsure & require further assistant regarding your sizes and measurements our customer service team are more than happy to help you. Please contact them via our contact page </p>
                    </div>
                </div>


                <div className="relative overflow-x-auto">

                    <h1 className="text-center my-4 font-bold">Size Chart for Top.</h1>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Top
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    XS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    S
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    M
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    L
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Bust
                                </th>
                                <td className="px-6 py-4">
                                    36-37
                                </td>
                                <td className="px-6 py-4">
                                    40-41
                                </td>
                                <td className="px-6 py-4">
                                    43-44
                                </td>
                                <td className="px-6 py-4">
                                    45-46
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Sleeve
                                </th>
                                <td className="px-6 py-4">
                                    55
                                </td>
                                <td className="px-6 py-4">
                                    56-57
                                </td>
                                <td className="px-6 py-4">
                                    58
                                </td>
                                <td className="px-6 py-4">
                                    59-60
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Band
                                </th>
                                <td className="px-6 py-4">
                                    36-37
                                </td>
                                <td className="px-6 py-4">
                                    40-41
                                </td>
                                <td className="px-6 py-4">
                                    43-44
                                </td>
                                <td className="px-6 py-4">
                                    45-46
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h1 className="mt-12 font-bold text-center">Size Chart for bottom.</h1>
                    <table className="w-full text-sm mt-6 text-left rtl:text-right text-gray-800">
                        <thead className="text-xs text-gray-800 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Bottom
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    XS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    S
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    M
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    L
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Bust
                                </th>
                                <td className="px-6 py-4">
                                    36-37
                                </td>
                                <td className="px-6 py-4">
                                    40-41
                                </td>
                                <td className="px-6 py-4">
                                    43-44
                                </td>
                                <td className="px-6 py-4">
                                    45-46
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Sleeve
                                </th>
                                <td className="px-6 py-4">
                                    55
                                </td>
                                <td className="px-6 py-4">
                                    56-57
                                </td>
                                <td className="px-6 py-4">
                                    58
                                </td>
                                <td className="px-6 py-4">
                                    59-60
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    Band
                                </th>
                                <td className="px-6 py-4">
                                    36-37
                                </td>
                                <td className="px-6 py-4">
                                    40-41
                                </td>
                                <td className="px-6 py-4">
                                    43-44
                                </td>
                                <td className="px-6 py-4">
                                    45-46
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <Footer />
            <div className="h-16"></div>
        </div>
    )
}