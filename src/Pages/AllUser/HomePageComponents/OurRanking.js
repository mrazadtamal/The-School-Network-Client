import React from 'react';

const OurRanking = () => {
    return (
        <div className="pt-20 pb-20 bg-slate-50">

            <h2 className="text-center text-4xl font-bold">Our Ranking</h2>
            <p className="text-center pt-5">
               The School Network  is recognized in independent government assessments  <br/>as one of top graded universities in Bangladesh.


            </p>
            <div className="container mx-auto pt-5 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-20 pl-20 gap-5 sm:place-content-center sm:place-items-center">
                <div className="bg-white border-2 rounded-lg">
                    <img className="w-full" src="https://i.ibb.co/vVK9vBZ/times1.jpg" alt="Mountain"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Times Higher Education Impact
                        </div>
                        <p className="text-gray-700 text-base">
                            THN has achieved (301-400) in world's leading Times Higher Education Impact Rankings 2021
                        </p>
                    </div>

                </div>
                <div className="bg-white border-2 rounded-lg">
                    <img className="w-full" src="https://i.ibb.co/Kwz1p2k/qs.jpg" alt="Mountain"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">QS World University Rankings
                        </div>
                        <p className="text-gray-700 text-base">
                            THN has been ranked 3rd among all private Universities of Bangladesh in QS Asia Rankings-2022
                        </p>
                    </div>

                </div>
                <div className="bg-white border-2 rounded-lg">
                    <img className="w-full" src="https://i.ibb.co/GkCwSjX/sicr.jpg" alt="Mountain"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">SCIMAGO Institutions Ranking
                        </div>
                        <p className="text-gray-700 text-base">
                            THN Included in the SCIMAGO Institutions Ranking 2020 - A Global Journal Ranking Institute.
                        </p>
                    </div>

                </div>
                <div className="bg-white border-2 rounded-lg">
                    <img className="w-full pb-12" src="https://i.ibb.co/7r2jdXJ/green1.jpg" alt="Mountain"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">UI Greenmetric Ranking
                        </div>
                        <p className="text-gray-700 text-base">
                            THND Ranks top in Bangladesh for the third consecutive year & now 150 no.
                        </p>
                    </div>

                </div>

            </div>
            </div>
    );
};

export default OurRanking;
