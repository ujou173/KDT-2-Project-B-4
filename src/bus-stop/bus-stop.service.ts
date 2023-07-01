
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { parseStringPromise } from 'xml2js';
import * as mongoose from 'mongoose';

interface ServiceResult {
  msgHeader?: string;
  msgBody?: {
    itemList?: string;
  };
}
@Injectable()
export class BusStopService {
  constructor(
    private httpService: HttpService
  ) {
  }


  async getBusStop(url: string): Promise<{ ServiceResult: ServiceResult }> {
    // for (let i = 0; i < 2; i++) {
      const headers = {
        'Authorization': 'Bearer your-access-token', // 액세스 토큰 대체
        'Content-Type': 'application/xml',
        // 필요한 경우 여기에서 추가 헤더 추가
      };
      
    const response = await this.httpService.get(url, { headers }).toPromise();
    const data = response.data;
    const json = await parseStringPromise(data, { explicitArray: false, trim: true }) as { ServiceResult: ServiceResult };
    

    // const busStopData = {
    //   name: Object.entries(json.ServiceResult.msgBody.itemList[0])[1],
    //   // ...
    // };
  
  // Save JSON data to MongoDB

  console.log(Object.entries(json.ServiceResult.msgBody.itemList[0])[1]);
  
    return json;
    // }
  }

}