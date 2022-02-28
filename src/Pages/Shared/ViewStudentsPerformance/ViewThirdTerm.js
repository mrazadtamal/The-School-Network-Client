import React from 'react'

const ViewThirdTerm = ({result}) => {
  return (
    <>
              {
          result.class === 'class-one' || result.class === 'class-two' ? <><h1 className='text-center text-xl font-bold mt-8'>Third Term Result Of {result.name}</h1>
          <div className="bg-white p-8 rounded-md w-full">
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Subject Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Mid Term
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Final Term
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          CGPA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.bangla}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.banglamid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.banglafinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.banglatotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.banglaCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.english}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.englishmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.englishfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.englishtotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.englishCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.math}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.mathmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathtotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.gs}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.gsmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gsfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gstotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gsCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.religion}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.religionmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religionfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religiontotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religionCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.draw}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.drawmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.drawfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.drawtotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.drawCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5  bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                           
                            </p>
                          </td>
                          <td className="px-5 py-5  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                          </td>
                          <td className="px-5 py-5  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                          </td>
                          <td className="px-5 py-5 bg-white text-sm font-bold">
                            {result.Failcount > 0? <p className="text-red-900 whitespace-no-wrap">Failed in {result.Failcount} Subject</p> : <p className="text-green-900 whitespace-no-wrap font-bold">{result.thirdtermCgpa}</p>}
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div></> : ''
        }
        {
          result.class === 'class-three' || result.class === 'class-four' ? <><h1 className='text-center text-xl font-bold mt-8'>Third Term Result Of {result.name}</h1>
          <div className="bg-white p-8 rounded-md w-full">
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Subject Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Mid Term
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Final Term
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          CGPA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.bangla1}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.bangla1mid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.bangla1final}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.bangla1total}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.bangla1Cgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.bangla2}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.bangla2mid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.bangla2final}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.bangla2total}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.bangla2Cgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.english1}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.english1mid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.english1final}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.english1total}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.english1Cgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.english2}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.english2mid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.english2final}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.english2total}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.english2Cgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.math}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.mathmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathtotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.gs}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.gsmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gsfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gstotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gsCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.religion}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.religionmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religionfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religiontotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religionCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5  bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                           
                            </p>
                          </td>
                          <td className="px-5 py-5  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                          </td>
                          <td className="px-5 py-5  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                          </td>
                          <td className="px-5 py-5 bg-white text-sm font-bold">
                            {result.Failcount1 > 0? <p className="text-red-900 whitespace-no-wrap">Failed in {result.Failcount1} Subject</p> : <p className="text-green-900 whitespace-no-wrap font-bold">{result.thirdtermCgpa}</p>}
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div></> : ''
        }
       {
          result.class === 'class-five' ? <><h1 className='text-center text-xl font-bold mt-8'>First Term Result Of {result.name}</h1>
          <div className="bg-white p-8 rounded-md w-full">
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Subject Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Mid Term
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Final Term
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                          CGPA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.bangla}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.banglamid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.banglafinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.banglatotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.banglaCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.english}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.englishmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.englishfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.englishtotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.englishCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.math}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.mathmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathtotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.mathCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.gs}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.gsmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gsfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gstotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.gsCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.religion}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.religionmid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religionfinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religiontotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.religionCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {result.science}
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {result.sciencemid}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.sciencefinal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.sciencetotal}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{result.scienceCgpa}</p>
                          </td>
                      </tr>
                      <tr>
                          <td className="px-5 py-5  bg-white text-sm">
                            <div className="flex items-center font-bold">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  
                                </p>
                              </div>
                            </div>
                          </td>
                      
                          <td className="px-5 py-5 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                           
                            </p>
                          </td>
                          <td className="px-5 py-5  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                          </td>
                          <td className="px-5 py-5  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                          </td>
                          <td className="px-5 py-5 bg-white text-sm font-bold">
                            {result.Failcount3 > 0? <p className="text-red-900 whitespace-no-wrap">Failed in {result.Failcount3} Subject</p> : <p className="text-green-900 whitespace-no-wrap font-bold">{result.thirdtermCgpa}</p>}
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div></> : ''
        }
    </>
  )
}

export default ViewThirdTerm
